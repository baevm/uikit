import { defineConfig, devices } from '@playwright/experimental-ct-react';
import path from 'path';

/**
 * https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './',
  testMatch: '**/__tests__/**/*.visual.tsx',
  snapshotPathTemplate:
    '{testFileDir}/__snapshots__/{arg}-{platform}-{projectName}{ext}',
  timeout: 10 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      'html',
      {
        open: process.env.CI ? 'never' : 'on-failure',
      },
    ],
  ],
  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          '##': path.resolve(__dirname, './src'),
        },
      },
      optimizeDeps: {
        include: ['react', 'react-dom', '@bem-react/classname', 'date-fns'],
      },
    },
  },

  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',

      maxDiffPixels: 0,
      threshold: 0.01,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
