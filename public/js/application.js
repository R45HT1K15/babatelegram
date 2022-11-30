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

// document.querySelector('#role').onchange = function (event) {
//   let el = document.querySelector('#reg');
//   el.href = '/'+event.target.value
// };



// считавание текста с картинки
// функция распознавания изображения
// function recoqnize(file, lang, logger){
//   return Tesseract.recognize(file, lang, {logger})
//   .then(({ data: { text }}) => {
//     return text;
//   })
// }

// const log = document.querySelectorAll('#log');

const photos = document.querySelectorAll('.photo')
photos.forEach((photo) => {
  photo.querySelector('.mark').addEventListener('click', () => {
    const log = photo.querySelector('#log')
    if(log.style.display === 'none') {
      log.style.display = 'block'

      function recognize(file, lang, logger) {
        return Tesseract.recognize(file, lang, {logger})
         .then(({ data: {text }}) => {
           return text;
         })
      }

      function updateProgress(data) {
        log.innerHTML = '';
        const statusText = document.createTextNode(data.status);
        const progress = document.createElement('progress');
        progress.max = 1;
        progress.value = data.progress;
        log.appendChild(statusText);
        log.appendChild(progress);
      }

      function setResult(text) {
        log.innerHTML = '';
        text = text.replace(/\n\s*\n/g, '\n');
        const pre = document.createElement('pre');
        pre.innerHTML = text;
        pre.classList = 'text'
        log.appendChild(pre);
      }
      const file = photo.querySelector('.photocartochka').querySelector('.photka').src
      const lang = 'rus'

      recognize(file, lang, updateProgress)
      .then(setResult);

      function speak() {
        let text = photo.querySelector('.text'); // получаем полученный с картинки текст
        speechSynthesis.speak(new SpeechSynthesisUtterance(text.textContent)); // происходит озвучка текста
      }
      const speakBtn = photo.querySelector('#listen') // получаем кнопку озвучки
      
      // слушатель событик на кнопке и запуск функции озвучки текста
      speakBtn.addEventListener('click', () => {
        let text = photo.querySelector('.text')
        console.log('text', text)
        if(text.className !== '.pause') {
          speak();
        } else {
        }
      })

      
    } else {
      log.style.display = 'none'
      log.innerHTML = '';
    }
  })
})
