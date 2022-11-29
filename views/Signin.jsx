const React = require('react');
const Layout = require('./Layout');

module.exports = function Signin() {
return (
<Layout>
  <div className='wrapper'>
    <h3>Вход</h3>
    <a href="/"><button type="button" class="btn-close" aria-label="Закрыть"></button></a>
    <form action='/signin' method='POST'>
      <div class="mb-3">
        <label htmlFor="login">Введите логин:</label>
        <input class="form-control" type="text" id='login' name='login' placeholder='kartina1953' required />
      </div>
      <div class="mb-3">
        <label htmlFor="password">Введите пароль:</label>
        <input class="form-control" type="password" id='password' name='password' placeholder='DeReVnYa168' required />
      </div>
      <div class="mb-3">
        <label htmlFor="role">Кто вы?</label>
        <select class="form-select" defaultValue="Бабушка(дедушка)" name="role" id="role" required>
          <option value="babushkagram">Бабушка(дедушка)</option>
          <option value="vnukogram">Внучка(внук)</option>
        </select>
      </div>
      <a href="/babushkagram" id='reg' className="btn">
        <button type="submit" className="btn"> Войти </button>
      </a>
    </form>
  </div>
</Layout>
);
}