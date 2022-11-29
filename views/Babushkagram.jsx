const React = require('react');
const Layout = require('./Layout');

module.exports = function Babushkagram({pictures}) {
console.log(pictures)
return (
<Layout>
  <div>
    <div className='mainPage'>
      <div>
        {pictures && (pictures.map((el) => (
          <img src={`${el.url}`} alt="что-то пошло не так" />
        )))}
      </div>
    </div>
  </div>
</Layout>
);
}