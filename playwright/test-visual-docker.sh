#!/usr/bin/env bash

set -e
set -x

PLAYWRIGHT_VERSION=$(node -p "require('./package.json').devDependencies['@playwright/test'].replace('^', '')")

if [ -z "$PLAYWRIGHT_VERSION" ]; then
  echo "Unable to find Playwright version. Make sure @playwright/test is installed."
  exit 1
fi

echo "Using Playwright version $PLAYWRIGHT_VERSION"

# node_modules для тестов устанавливаются в отдельную папку ...
DEFAULT_NODE_MODULES_CACHE_DIR="./.cache/playwright-docker-node-modules"
NODE_MODULES_CACHE_DIR="$DEFAULT_NODE_MODULES_CACHE_DIR"

if [[ -n "$CI" || -n "$GITHUB_ACTIONS" ]]; then
  # В CI зависимости уже установлены предыдущими шагами workflow (т.к. нет проблем с хостом macos/linux контейнером)
  NODE_MODULES_CACHE_DIR="./node_modules"
fi

if [[ "$*" == "clear-cache" ]]; then
  echo "Clearing node_modules cache..."
  rm -rf "$NODE_MODULES_CACHE_DIR"
  echo "Cache cleared"
  exit 0
fi

if [[ "$NODE_MODULES_CACHE_DIR" == "$DEFAULT_NODE_MODULES_CACHE_DIR" && ! -d "$NODE_MODULES_CACHE_DIR" ]]; then
  echo "Installing node_modules in Docker"
  mkdir -p "$NODE_MODULES_CACHE_DIR"
  docker run --rm \
    --network host \
    -v $(pwd):/workspace \
    -v "$NODE_MODULES_CACHE_DIR:/workspace/node_modules" \
    -w /workspace \
    -i "mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-jammy" \
    /bin/bash -c "yarn install --frozen-lockfile"
fi

docker run --rm \
  --network host \
  -v $(pwd):/workspace \
  -v "$NODE_MODULES_CACHE_DIR:/workspace/node_modules" \
  -w /workspace \
  -i "mcr.microsoft.com/playwright:v$PLAYWRIGHT_VERSION-jammy" \
  /bin/bash -c "$*"