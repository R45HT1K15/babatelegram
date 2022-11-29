const React = require('react');
const Layout = require('./Layout');

module.exports = function Signin({error}) {
  return (
    <Layout>
      <div className='wrapper'>
        <h2>Добро пожаловать в Babushkogram</h2>
        <h3>Вход</h3>
        {error && (<h4> Неправильно введен логин или пароль</h4>)}
        <form action='/signin' method='POST'>
          <div>
            <label htmlFor="login">Введите логин:</label>
              <input
                type="text"
                id='login'
                name='login'
                placeholder='kartina1953'
                required
             />
          </div>
          <div>
            <label htmlFor="password">Введите пароль:</label>
              <input
                type="text"
                id='password'
                name='password'
                placeholder='DeReVnYa168'
                required
             />
          </div>
          <div>
          <label htmlFor="role" >Кто вы?</label>
            <select
              defaultValue="Бабушка(дедушка)"
              name="role"
              id="role"
              required
            >
              <option value="babushkagram">Бабушка(дедушка)</option>
              <option value="vnukogram">Внучка(внук)</option>
              </select>
          </div>
          <a href="/babushkagram" id='reg'>
        <button type="submit" class="btn btn-outline-success btn-lg"> Зарегистрироваться</button>
      </a>
        </form>
      </div>
    </Layout>
  );
}
