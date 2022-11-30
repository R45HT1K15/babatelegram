const hintBtn = document.querySelector('.hintBtn')
const hint1 = document.querySelector('.hint1')
const hint2 = document.querySelector('.hint2')
const text1 = document.querySelector('.text1')
const arrow1 = document.querySelector('.arrow1')
const offHint = document.querySelector('.offHint')


hintBtn?.addEventListener('click', (event)=> {
  hint1.style.display === 'none'? hint1.style.display = 'block':hint1.style.display = 'none';
  hint2.style.display === 'none'? hint2.style.display = 'block':hint2.style.display = 'none';
  if(event.target.innerText === "Включить подсказки!") event.target.innerText = "Выключить подсказки!"
  else event.target.innerText = "Включить подсказки!"
  // console.log('event.target.innerText', event.target.innerText)
  // if(event.target.innerText === "Выключить подсказки!") event.target.innerText = "Включить подсказки!";
})
// console.log(hintBtn)
// console.log(offHint)

document.querySelector('#role').onchange = function (event) {
  let el = document.querySelector('#reg');
  el.href = '/'+event.target.value
};
