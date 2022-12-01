const React = require('react');
const Layout = require('./Layout');

module.exports = function PageNotFound({}) {
return (
<Layout>
  <div>
    <div className='errorPage'>
    <h2>Ошибка! Не беспокойтесь,</h2>
      <div>
        <p>Вы просто допустили ошибку в написании сайта!</p>
        <p>Просто нажмите вот <a href="/">СЮДА</a></p>
      </div>
      <div className='errorLogo'>
        404
      </div>
    </div>
  </div>
</Layout>
);
}