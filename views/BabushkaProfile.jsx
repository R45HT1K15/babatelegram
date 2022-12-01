const React = require('react');
const Layout = require('./Layout');

module.exports = function BabushkaProfile({pictures, user, nameUser}) {
return (
<Layout user={user}>
  <div className='userProfile'>
    <div className='hat'>
      <h1>{nameUser.fio}</h1>
      {user.login === nameUser.login ? (
        <a href="/logout"><button>ВЫЙТИ(НЕ НАЖИМАТЬ!)</button></a>
      ) : (
        ''
      )}
    </div>
    <div className='photoTable'>
      {pictures && pictures.map((el) =>
      <div className="col">
        <a href={`/babushkagram/profile/${el.Grandparent.login}/${el.id}`} id={el.id}><img className='photkaProfile' src={`${el.url}`} alt="что-то пошло не так" /></a>
      </div>
      )}
    </div>
  </div>
</Layout>
);
}