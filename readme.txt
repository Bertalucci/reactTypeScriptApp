npm init -y
(в корне создасться package.json с дефолтными настройками)

в src создаем index.ts
(запускать index.ts можно RM - Run, но по умолчанию импорт,экспорт не работают - нужен Webpack)

https://webpack.js.org/
Documentation - Guides - Getting Started - Basic Setup
npm install webpack webpack-cli --save-dev

Добавляем файл webpack.config.ts в корень
(определяем точку входа - index.ts и папку сборки, например, build c файлом bundle.js)

Собираем проект командой webpack

Устанавливаем плагин html-webpack-plugin
npm i -D html-webpack-plugin

Добавляем typescript
npm install --save-dev typescript ts-loader

Меняем расширение файлов index, test на ts

Создаем tsconfig.json в корне

//not ended