const React = require('react');
const Layout = require('./Layout');

module.exports = function Signup( { error }) {
return (
<Layout>
  <div className='wrapper'>
    <h3>Регистрация</h3>
    { error && (<h4>Пользователь с таким логином существует</h4>)}
    <a href="/"><button type="button" className="btn-close" aria-label="Закрыть"></button></a>
    <form action='/signup' method='POST'>
      <div className="mb-3">
        <label htmlFor="fio" className="form-label">Ф.И.О.</label>
        <input className="form-control" type="text" id='fio' name='fio' placeholder='Третьякова Картина Галереевна' required
          pattern="[A-Za-zА-Яа-яёЁ]+" title="Пишите все, кроме цифр!" />
        <div id="passwordHelpBlock" className="form-text">
          Используйте свои настоящие ФИО, чтобы Ваши подруги и друзья могли узнать вас.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="login">Логин:</label>
        <input className="form-control" type="text" id='login' name='login' placeholder='kartina1953' required
          pattern="[A-Za-z0-9]\w+" title="Латинские буквы и цифры!" />
        <div id="passwordHelpBlock" className="form-text">
          Логин вы будете использовать, когда будете заходить на сайт. Запишите обязательно в блокнот и не потеряйте.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль:</label>
       <input className="form-control" type="password" id='password' name='password' placeholder='DeReVnYa168'
          required />
           <div id="passwordHelpBlock" className="form-text">
          Пароль вы так же будете использовать, когда будете заходить снова сюда. Придумайте достаточно сложный, но не сильно, и обязательно запишите его!!!
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Выберите категорию</label>
        <select className="form-select" defaultValue="Бабушка(дедушка)" name="role" id="role" required>
          <option value="babushkagram">Бабушка(дедушка)</option>
          <option value="vnukogram">Внучка(внук)</option>
        </select>
      </div>
      <a href="/babushkagram" id='reg' className="btn">
        <button type="submit" className="btn"> Зарегистрироваться</button>
      </a>
    </form>
  </div>
</Layout>
);
}
