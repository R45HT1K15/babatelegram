const React = require('react');
const Layout = require('./Layout');

module.exports = function Vnukolikes({ grandmaLikes, myRelatives, user }) {
  return (
    <Layout user={user}>
      <form
        className="addRelatives"
        name="addRelatives"
        action="/vnukogram/babushkalike"
        method="POST"
      >
        <div className="mb-3">
          <select
            className="form-select"
            name="relatives"
            id="relatives"
            required
          >
            {myRelatives &&
              myRelatives.Grandparents.map((el) => (
                <option value={el.id}>{`${el.fio}(${el.login})`}</option>
              ))}
          </select>
        </div>
        <div className="slovo">
          <a href="" id="reg">
            <button type="submit" className="btnAuth">
              Выбрать
            </button>
          </a>
        </div>
      </form>
      <div>{user.name}, Вашей бабушке понравились вот эти фото: </div>
      <div className="photosPage">
        {grandmaLikes &&
          grandmaLikes.Pictures.map((el) => (
            <div className="photo">
              <div className="detailInfo">
                <div className="photocartochka">
                  <img
                    className="photka"
                    src={`${el.url}`}
                    alt="что-то пошло не так"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};
