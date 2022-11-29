const React = require('react');
const Layout = require('./Layout');

module.exports = function Index() {
  return (
    <Layout>
       <div className='wrapper'>
          <h2>Добро пожаловать в Babushkogram</h2>
          <a href="/signup"><button>Регистрация</button></a>
          <a href="/signin"><button>Войти</button></a>
          <h3>Подробнее о сайте</h3>
          <div>
            <div>
              что-то о сайте
            </div>
          </div>
        </div>
    </Layout>
  );
}
