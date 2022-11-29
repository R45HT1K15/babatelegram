document.querySelector('#role').onchange = function (event) {
  let el = document.querySelector('#reg');
  el.href = '/'+event.target.value
};
const btn = document.querySelector('#btnradio3')
console.log(btn)