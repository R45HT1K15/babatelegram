const React = require('react');
const Layout = require('./Layout');

module.exports = function Signup() {
  return (
    <Layout>
      <div className='wrapper'>
        <h2>Добро пожаловать в Babushkogram</h2>
        <h3>Регистрация</h3>
        <form action='/signup' method='POST'>
          <div>
            <label htmlFor="fio">Ф.И.О.</label>
            <input
             type="text"
             id='fio'
             name='fio'
             placeholder='Третьякова Картина Галереевна'
             required
             />
          </div>
          <div>
            <label htmlFor="login">Придумайте логин:</label>
              <input
                type="text"
                id='login'
                name='login'
                placeholder='kartina1953'
                required
             />
          </div>
          <div>
            <label htmlFor="password">Придумайте СЛОЖНЫЙ пароль:</label>
              <input
                type="text"
                id='password'
                name='password'
                placeholder='DeReVnYa168'
                required
             />
          </div>
          <div>
          <label htmlFor="role" >Выберите категорию</label>
            <select
              defaultValue="Бабушка(дедушка)"
              name="role"
              id="role"
              required
            >
              <option value="granparant">Бабушка(дедушка)</option>
              <option value="grandchild">Внучка(внук)</option>
              </select>
          </div>
        </form>
      </div>
    </Layout>
  );
}
