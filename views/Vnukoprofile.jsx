const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukoprofile({grandparents, user}) {

return (
<Layout user={user}>
  <div className='userProfile'>
    <div className='hat'>
      <h1>Привет, {user.name}</h1>
      <a href="/logout"><button>logout</button></a>
    </div>
    <label htmlFor="role" className="form-label">Выбери родственника</label>
      <div className="mb-3">
        <select className="form-select" defaultValue="" name="role" id="role" required>
      {grandparents && grandparents.map((el) =>
          <option value={grandparents}>{`${el.fio}(${el.login})`}</option>
      )}
        </select>
      </div>
      <a href="/babushkagram" id='reg'>
        <button type="submit" className="btnAuth">Выбрать</button>
      </a>
  </div>
</Layout>
);
}
