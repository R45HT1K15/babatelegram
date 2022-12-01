const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukoprofile({grandparents, user, myRelatives}) {

return (
<Layout user={user}>
<script defer src="/js/vnukAddBabushka.js"></script>
  <div className='userProfile'>
    <div className='hat'>
      <h1>Привет, {user.name}</h1>
      <a href="/logout"><button>Выход тут</button></a>
    </div>
    <label htmlFor="role" className="form-label">Выбери родственника</label>
    <form className='addRelatives' name='addRelatives' action='/vnukogram/profile' method='POST'>
          <div className="mb-3">
              <select className="form-select" name="relatives" id="relatives" required>
                {grandparents && grandparents.map((el) =>
                  <option value={el.id}>{`${el.fio}(${el.login})`}</option>
                )}
              </select>
          </div>
          <div className='slovo'>
              <a href="" id='reg'>
                  <button type="submit" className="btnAuth">Выбрать</button>
              </a>
              
          </div>
      </form>
      <div className='listOfRelatives'>
        <div>Ваши родственники</div>
        <ol data-list>
          {(myRelatives=== null) ? (<div>Вы ни на кого не подписаны</div>) 
          : 
          (myRelatives.map((el) => (
            <div className='vnukDeleteBabushka'>
                <li key={el.id}>{el['Grandparents.fio']}({el['Grandparents.login']})</li>
                <button data-delbaba={el['Grandparents.id']} type="submit" className="btnAuth">Удалить</button>
            </div>)
          ))}
        </ol>
      </div>
  </div>
</Layout>
);
}
