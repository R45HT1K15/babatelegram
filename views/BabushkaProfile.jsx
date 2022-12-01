const React = require('react');
const Layout = require('./Layout');

module.exports = function BabushkaProfile({pictures, user}) {

return (
<Layout user={user}>
  <div className='userProfile'>
    <div className='hat'>
      <h1>{user.fio}</h1>
      <a href="/logout"><button>ВЫЙТИ(НЕ НАЖИМАТЬ!)</button></a>
    </div>
    <div className='photoTable'>
      {pictures && pictures.map((el) =>
      <div className="col">
        <a href={`/babushkagram/profile/${el.id}`} id={el.id}><img className='photkaProfile' src={`${el.url}`} alt="что-то пошло не так" /></a>
      </div>
      )}
    </div>
  </div>
</Layout>
);
}