const React = require('react');

function Layout({ children, user = '' }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Babagram</title>
        <script src="https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
          rel="stylesheet"
        />
        <script defer src="/js/application.js"></script>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header className="header">
          {user ? (
            <h1>Добро пожаловать в Babushkagram, {user.name}</h1>
          ) : (
            <h1>Добро пожаловать в Babushkagram</h1>
          )}
        </header>
        {user?.role === 'babushkagram' ? (
          <>
            {user.help === 'true' ? (
              <>
                <div className="hint1">
                  <h3>Все фотографии друзей</h3>
                  <img
                    src="/images/arrow1.png"
                    height="250px"
                    weight="250px"
                    alt=""
                  />
                </div>
                <div className="hint2">
                  <h3>
                    Ваши фотографии <br />
                    хранятся тут
                  </h3>
                  <img
                    src="/images/arrow2.png"
                    height="250px"
                    weight="250px"
                    alt=""
                  />
                </div>
                <div className="hints">
                  <button data-help={user.help} className="hintBtn">
                    <h3 className="offHint">Выключить подсказки!</h3>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="hint1" style={{ display: 'none' }}>
                  <h3>Все фотографии друзей</h3>
                  <img
                    src="/images/arrow1.png"
                    height="250px"
                    weight="250px"
                    alt=""
                  />
                </div>
                <div className="hint2" style={{ display: 'none' }}>
                  <h3>
                    Ваши фотографии <br />
                    хранятся тут
                  </h3>
                  <img
                    src="/images/arrow2.png"
                    height="250px"
                    weight="250px"
                    alt=""
                  />
                </div>
                <div className="hints">
                  <button data-help={user.help} className="hintBtn">
                    <h3 className="offHint">Включить подсказки!</h3>
                  </button>
                </div>
              </>
            )}

            <div className="container">{children}</div>

            <footer>
              {/* для бабки */}
              <div
                className="btn-group"
                id="blackwood"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <a href="/babushkagram">
                  <button className="left" type="button">
                    Все фотокарточки
                  </button>
                </a>
                <a href="/babushkagram/newPhoto">
                  <button className="middle" type="button">
                    Выложить фотокарточку
                  </button>
                </a>
                <a href={`/babushkagram/profile/${user.login}`}>
                  <button className="right" type="button">
                    Мой профиль
                  </button>
                </a>
              </div>
            </footer>
          </>
        ) : (
          <div className="container">{children}</div>
        )}
        {user?.role === 'vnukogram' ? (
          <>
            <footer>
              {/* для внука */}
              <div
                className="btn-group"
                id="blackwood"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <a href="/vnukogram">
                  <button className="left" type="button">
                    Фотки бабули
                  </button>
                </a>
                <a href="/vnukogram/likes">
                  <button className="middle" type="button">
                    Лайкнутые фотки
                  </button>
                </a>
                <a href="/vnukogram/profile">
                  <button className="narightv" type="button">
                    Мой профиль
                  </button>
                </a>
              </div>
            </footer>
          </>
        ) : (
          <div></div>
        )}

  <footer>
    {/* для бабки */}
    <div className="btn-group" id='blackwood' role="group"  aria-label="Basic mixed styles example">
      <a href="/babushkagram"><button className="left" type="button">Все фотокарточки</button></a>
      <a href="/babuskagram/newPhoto"><button className="middle" type="button">Выложить фотокарточку</button></a>
      <a href="/babushkagram/profile"><button className="right" type="button">Мой профиль</button></a>
    </div>
    </footer>

    </>)
     : (  <div className='container'>{children}</div>)}
  { user?.role === 'vnukogram' ? 
  (<>
  <footer>
    {/* для внука */}
    <div className="btn-group" id='blackwood' role="group"  aria-label="Basic mixed styles example">
      <a href="/vnukogram" ><button className="left" type="button">Фотки бабули</button></a>
      <a href="/vnukogram/likes" ><button className="middle" type="button">Лайкнутые фотки</button></a>
      <a href="/vnukogram/profile" ><button className="right" type="button">Мой профиль</button></a>
    </div>
  </footer>
  </>)
     : (<div></div>)}

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
  </script>
</body>

</html>
);

}

module.exports = Layout;
