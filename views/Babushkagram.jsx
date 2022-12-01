const React = require('react');
const Layout = require('./Layout');

module.exports = function Babushkagram({
  pictures,
  user,
  arrOfPicturesWhichUserLike,
}) {
  return (
    <Layout user={user}>
      <script defer src="/js/babushkaLike.js"></script>
      <div className="photosPage">
        {pictures &&
          pictures.map((el) => (
            <div className="photo" key={el.id}>

              <h2>Выложил(а) <a className="linkUser" href={`/babushkagram/profile/${el['Grandparent.login']}`}>{el['Grandparent.fio']}</a></h2>

              <div className="detailInfo">
                <div className="photocartochka">
                  <img
                    className="photka"
                    src={`${el.url}`}
                    alt="что-то пошло не так"
                  />
                </div>
                <div className="logos">
                  <div className="logo">
                    <button className="mark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-textarea-t"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
                      </svg>
                      <p>прочитать</p>
                    </button>
                  </div>
                  <div className="logo">
                    <button className="mark  speak" id="listen">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-music-note-beamed"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                        <path
                          fillRule="evenodd"
                          d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                        />
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                      </svg>
                      <p>озвучить</p>
                    </button>
                  </div>
                  <div className="likecontainer">
                    {arrOfPicturesWhichUserLike.includes(el.id) ? (
                      <div className="logo counts">
                        <div>{el.countLike}</div>
                        <button className="like">
                          <img
                            data-like="deslike"
                            data-pictureid={el.id}
                            className="bi-heart"
                            src="/img/like.png"
                            alt="like"
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="logo counts">
                        <div>{el.countLike}</div>
                        <button className="like">
                          <img
                            data-like="like"
                            data-pictureid={el.id}
                            className="bi-heart"
                            src="/img/deslike.png"
                            alt="deslike"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div id="log" className="pictureText"></div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};
