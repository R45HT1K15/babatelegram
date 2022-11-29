const React = require('react');

function Layout({title, children}) {
return (
<html lang='en'>

<head>
  <meta charSet='UTF-8' />
  <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title>Babagram</title>
  <script src='https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </link>
  <script defer src="/js/application.js"></script>
  <link rel="stylesheet" href="/css/style.css" />
</head>

<body>
  {/* для авторизованного пользователя */}
  {/* <></> */}
  {/* для неавторизованного пользователя */}
  <header>
    <h2>Добро пожаловать в Babushkogram</h2>
  </header>
  <div className='container'>{children}</div>
  <footer>
    {/* для бабки */}
    <div className="btn-group" id='blackwood' role="group"  aria-label="Basic mixed styles example">
      <a href="/babushkogram" id="left" className="btn"><button className="btn" type="button">Все фотокарточки</button></a>
      <a href="/babuskogram/newPhoto" id="middle"  className="btn"><button className="btn" type="button">Выложить фотокарточку</button></a>
      <a href="/babushkogram/profile" id="right" className="btn"><button className="btn" type="button">Мой профиль</button></a>
    </div>
    {/* для внука */}
    {/* <div className="btn-group" id='blackwood' role="group"  aria-label="Basic mixed styles example">
      <a href="/vnukogram" id="left" className="btn"><button className="btn" type="button">Фотки бабули</button></a>
      <a href="/vnukogram/likes" id="middle" className="btn"><button className="btn" type="button">Лайкнутые фотки</button></a>
      <a href="/vnukogram/profile" id="right" className="btn"><button className="btn" type="button">Мой профиль</button></a>
    </div> */}
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
  </script>
</body>

</html>
);
}

module.exports = Layout;