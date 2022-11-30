const express = require('express'); 
const app = express(); 
require('@babel/register');
const morgan = require('morgan'); 
const path = require('path');
require('dotenv').config(); 
const session = require('express-session');
const FileStore = require('session-file-store')(session);
//импорт вспомогательных ф-й
const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const vnukRoutes = require('./routes/vnukRoutes');
const babushkaRoutes = require('./routes/babushkaRoutes');
const uploadRoute = require('./routes/uploadRoute');

 // вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
console.log('path.resolve(\'public\')', path.resolve('public'))
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('./images', express.static(path.join(__dirname, 'images')))

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

app.use(session(sessionConfig));

//роутеры
app.use('/', indexRoutes); //обработка main, signin, signup, logout
app.use('/babushkagram', babushkaRoutes); //обработка newPhoto, profile/:id, profile/:id/:imageid 
app.use('/vnukogram', vnukRoutes); // обработка likes, profile
app.use('/api', uploadRoute)

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
