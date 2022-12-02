const React = require('react');
const Layout = require('./Layout');

module.exports = function BabushkaNewPhoto({ myRelatives, user }) {
  return (
    <Layout user={user}>
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
            <button className="watch btnAuth" type="submit">
              СМОТРЕТЬ
            </button>
            <div className="listOfRelatives">
              <div>Ваши внучата</div>
              <ol data-list>
                {myRelatives.Grandchildren.length === 0 ? (
                  <div className="norelatives">
                    На вас не подписан ни один внук
                  </div>
                ) : (
                  myRelatives.Grandchildren.map((el) => (
                    <div className="babushkaDeleteVnuck">
                      <li key={myRelatives.id}>
                        {el.fio}({el.login})
                      </li>
                      <button
                        data-delbaba={el.id}
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
