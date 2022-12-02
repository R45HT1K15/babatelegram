const React = require('react');
const Layout = require('./Layout');

module.exports = function BabushkaNewPhoto({ myRelatives, user }) {
  return (
    <Layout user={user}>
      <script defer src="/js/babushkaDeleteVnuka.js"></script>
      <div className="wrapper">
        <div className="center_form">
          <form
            action="/api/upload"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="file" name="file" />
            <button type="submit">Загрузить</button>
          </form>

          <div className="denger">
            ВНИМАНИЕ! Будьте аккуратны, что выкладываете! За вами могут следить.
            Посмотреть подписавшихся родственников можно здесь{' '}
            <button className="btnAuth" data-watch="watch" type="submit">
              СМОТРЕТЬ
            </button>
            <div className="listOfRelatives" style={{ display: 'none' }}>
              <div>Ваши внучата:</div>
              <ol data-list>
                {myRelatives.Grandchildren.length === 0 ? (
                  <div className="norelatives">
                    Пока никто не следит за вами
                  </div>
                ) : (
                  myRelatives.Grandchildren.map((el) => (
                    <div className="vnukDeleteBabushka">
                      <li key={myRelatives.id}>
                        {el.fio}({el.login})
                      </li>
                      <button
                        data-idvnuk={el.id}
                        data-vnuk="vnuk"
                        type="submit"
                        className="btnAuth"
                      >
                        Удалить
                      </button>
                    </div>
                  ))
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
