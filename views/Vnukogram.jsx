const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukogram({pictures, user}) {
  return (
  <Layout user={user}>
    <div>{user.name}, Ваша бабушка выложила</div>
    <div className='photosPage'>
      {pictures && pictures.map((el) =>
      (<div className='photo vnukophoto'>
        <h2>Выложил(а) <a className="linkUser" href={`/babushkagram/profile/${el.Grandparent.login}`}>{el.Grandparent.fio}</a></h2>
        <div className='detailInfo'>
          <div className='photocartochka'>
            <img className='photka' src={`${el.url}`} alt="что-то пошло не так" />
          </div>
          <div className='logos'>
          </div>
        </div>
      </div>)
      )}
    </div>
  </Layout>
  );
  }
  