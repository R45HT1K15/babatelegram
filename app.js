//импорт сервера в константу
const express = require('express'); 
//создание константы, в которой лежит сервер
const app = express();
//трансформация кода из старого в новый
require('@babel/register');
//logger для запросов
const morgan = require('morgan'); 
//константа пути
const path = require('path');
//скрытая информация
require('dotenv').config(); 
//импорт в константу
const session = require('express-session');
//база хранения сессий
const FileStore = require('session-file-store')(session);
//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const vnukRoutes = require('./routes/vnukRoutes');
const babushkaRoutes = require('./routes/babushkaRoutes');
const uploadRoute = require('./routes/uploadRoute');
const PageNotFound = require('./views/PageNotFound')

// импорт рендера для отрисовки любой страницы
const render = require('./lib/render');

 // вызов функции проверки соединения с базоый данных
dbCheck();

//мидлварки
//статичный путь до паблика
app.use(express.static(path.resolve('public')));
//вывод в консоль
app.use(morgan('dev'));
//раскодировка body
app.use(express.urlencoded({ extended: true }));
//анпарсинг объектов
app.use(express.json());

// настройка сессий
const sessionConfig = {
  name: 'bearCookie',
  store: new FileStore(),
  secret: process.env.SECRET ?? 'mySecretPass',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

//создание сессий по файлу sessionConfig
app.use(session(sessionConfig));

//роутеры
//обработка main, signin, signup, logout
app.use('/',  indexRoutes); 
//обработка newPhoto, profile/:id, profile/:id/:imageid 
app.use('/babushkagram', babushkaRoutes);
// обработка likes, profile
app.use('/vnukogram', vnukRoutes);
 //загрузка фотографий
app.use('/api', uploadRoute);

//рендер несуществующей сраницы
app.get('*', (req, res) => {
  render(PageNotFound, {}, res)
})

//подключение по порту указанному в env.PORT или 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
