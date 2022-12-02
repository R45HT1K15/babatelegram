const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user }) {
return (
<Layout user={ user }>
  <div className='mainPage'>
    <div>
      <p>Здравствуйте, наши современные Бабушки и Дедушки!</p>
      <p>Данный сайт создан для всех, кто старается не отставать от молодежи. Здесь Вы можете загружать и делиться с друзьями мемами, рецептами и всем, всем, всем!</p>
      <p>Если Вы плохо видите, мы поможем вам с чтением надписей и их озвучкой.</p>
      <p style={{color: '#ec957b'}}>Но помните!<br /> На нашем сайте есть возможность зарегистрироваться Вашим внукам и внучкам и просматривать ТО, что Вы выкладываете.</p>
    </div>
    <div className='containerLogo'>
      <div><img className='mainLogo' src="/images/mainlogo.png" alt="Лого нашего сайта" /></div>
      <div>
        <div className='authBtns'>
          <a href="/signup"><button className="btnAuth">Регистрация</button></a>
          <a href="/signin"><button className="btnAuth">Войти</button></a>
        </div>
      </div>
    </div>
  </div>
</Layout>
);
}