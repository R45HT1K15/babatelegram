const React = require('react');
const Layout = require('./Layout');

module.exports = function Index() {
return (
<Layout>
  <div>
    <h3>Подробнее о сайте</h3>
    <div className='mainPage'>
      <div>
        что-то о сайте
      </div>
      <div className='authBtns'>
        <a href="/signup" className="btn"><button className="btn">Регистрация</button></a>
        <a href="/signin" className="btn"><button className="btn">Войти</button></a>
      </div>
    </div>
  </div>
</Layout>
);
}