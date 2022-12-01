const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukoprofile({myRelatives, grandparents, user}) {
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
          {(myRelatives.Grandparents.length === 0 ) ? (
          <div className='norelatives'>Вы ни на кого не подписаны</div>
          ) 
          : 
          (myRelatives.Grandparents.map((el) => (
            <div className='vnukDeleteBabushka'>
                <li key={myRelatives.id}>{el.fio}({el.login})</li>
                <button data-delbaba={el.id} type="submit" className="btnAuth">Удалить</button>
            </div>)
          ))}
        </ol>
      </div>
  </div>
</Layout>
);
}
