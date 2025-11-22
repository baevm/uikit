# Скриншотное тестирование с playwright

## Запуск

## Команды

"yarn test:visual:install":
"yarn test:visual":
"yarn test:visual:update":
"yarn test:visual:docker":
"yarn test:visual:docker:update":
"yarn test:visual:docker:clear":

# FAQ

- Не открывается playwright report (http://localhost:9323) после упавших тестов в docker контейнере (https://docs.docker.com/engine/network/drivers/host/#docker-desktop):
  1. Авторизоваться в docker desktop
  2. В docker desktop кнопка `Settings` (правый верхний угол)
  3. Во вкладке `Resources` выбрать пункт `Network`
  4. Включить опцию `Enable host networking`
  5. Нажать `apply` и перезапустить docker desktop
