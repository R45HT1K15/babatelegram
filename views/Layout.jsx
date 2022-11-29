const React = require('react');

function Layout({title, children}) {
return (
<html lang='en'>

<head>
  <meta charSet='UTF-8' />
  <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title>{title ? title : 'ReactSSR'}</title>
  <script src='https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </link>
  <script defer src="/js/application.js"></script>
  <link rel="stylesheet" href="/css/style.css" />
</head>

<body>
  <div className='container'>{children}</div>
  <footer>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <a href="/babushkogram" class="btn btn-success"><button class="btn btn-success" type="button">Все фотокарточки</button></a>
      <a href="/babushkogram" class="btn btn-success"><button class="btn btn-success" type="button">Выложить фотокарточку</button></a>
      <a href="/babushkogram" class="btn btn-success"><button class="btn btn-success" type="button">Мой профиль</button></a>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous">
  </script>
</body>

</html>
);
}

module.exports = Layout;