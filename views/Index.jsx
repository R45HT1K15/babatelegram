const React = require('react');
const Layout = require('./Layout');

module.exports = function Index() {
return (
<Layout>
  <div>
    <h2>Подробнее о сайте</h2>
    <div className='mainPage'>
      <div>
        что-то о сайте
      </div>
      <div className='authBtns'>
        <a href="/signup"><button className="btnAuth">Регистрация</button></a>
        <a href="/signin"><button className="btnAuth">Войти</button></a>
      </div>
    </div>
  </div>
</Layout>
);
}