const React = require('react');
const Layout = require('./Layout');

module.exports = function BabushkaNewPhoto({ user }) {
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
        </div>
      </div>
    </Layout>
  );
};
