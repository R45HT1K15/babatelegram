const React = require('react');
const Layout = require('./Layout');

module.exports = function Signin({ error }) {
  return (
    <Layout>
      <div className="wrapper">
        <h2>Вход</h2>
        {error && (
          <h4 className="oshibca"> Неправильно введен логин или пароль</h4>
        )}
        <a href="/">
          <button
            type="button"
            className="btn-close"
            aria-label="Закрыть"
          ></button>
        </a>
        <form action="/signin" method="POST">
          <div className="mb-3">
            <label htmlFor="login">Введите логин:</label>
            <input
              className="form-control"
              type="text"
              id="login"
              name="login"
              placeholder="kartina1953"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Введите пароль:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="DeReVnYa168"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role">Кто вы?</label>
            <select
              className="form-select"
              defaultValue="Бабушка(дедушка)"
              name="role"
              id="role"
              required
            >
              <option value="babushkagram">Бабушка/дедушка</option>
              <option value="vnukogram">Внучка/внук</option>
            </select>
          </div>
          <a href="/babushkagram" id="reg">
            <button type="submit" className="btnAuth">
              {' '}
              Войти{' '}
            </button>
          </a>
        </form>
      </div>
    </Layout>
  );
};
