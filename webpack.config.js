// webpack.config.js
const path = require('path'); // подключаем path к конфигу вебпак
module.exports = { // module.exports — это синтаксис экспорта в Node.js
  entry: { main: './src/index.js' }
  // указали первое место, куда заглянет webpack, — файл index.js в папке src
  output: {
    path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path
        filename: 'main.js',
                publicPath: ''
  // указали в какой файл будет собираться весь js и дали ему имя
}