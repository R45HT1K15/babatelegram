const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukogram({pictures, user}) {
  return (
  <Layout user={user}>
    <div>{user.name}, Ваша бабушка выложила</div>
    <div className='photosPage'>
      {pictures && pictures.map((el) =>
      (<div className='photo'>
        {/* <h2>Выложила бабушка с id = {el['Grantparent_id']} </h2> */}
        <div className='detailInfo'>
          <div className='photocartochka'>
            <img className='photka' src={`${el.url}`} alt="что-то пошло не так" />
          </div>
          <div className='logos'>
            <div className='logo'>
              <button className='mark'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                  className="bi bi-textarea-t" viewBox="0 0 16 16">
                  <path
                    d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  <path
                    d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
                </svg>
                <p>прочитать</p>
              </button>
            </div>
            <div className='logo'>
              <button className='mark'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                  className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                  <path
                    d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                </svg>
                <p>озвучить</p>
              </button>
            </div>
            <div className='logo'>
              <form action='/signin' method='POST'>
                <button className='like' type='submit'>
                  {/* для пользователя у которого нет лайка, под этим постом */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-heart"
                    viewBox="0 0 16 16">
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                  {/* для пользователя у которых есть лайк, под этим постом */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                    className="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg> */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>)
      )}
    </div>
  </Layout>
  );
  }
  