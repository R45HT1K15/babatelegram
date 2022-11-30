const hintBtn = document.querySelector('.hintBtn');
const hint1 = document.querySelector('.hint1');
const hint2 = document.querySelector('.hint2');
const text1 = document.querySelector('.text1');
const arrow1 = document.querySelector('.arrow1');
const offHint = document.querySelector('.offHint');




hintBtn?.addEventListener('click', (event) => {
  hint1.style.display === 'none'
    ? (hint1.style.display = 'block')
    : (hint1.style.display = 'none');
  hint2.style.display === 'none'
    ? (hint2.style.display = 'block')
    : (hint2.style.display = 'none');
  if (event.target.innerText === 'Включить подсказки!')
    event.target.innerText = 'Выключить подсказки!';
  else event.target.innerText = 'Включить подсказки!';
});

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
        const pauseBtn = document.createElement('button');
        const resumeBtn = document.createElement('button');
        pauseBtn.innerText = 'пауза';
        resumeBtn.innerText = 'продолжить'
        pre.innerHTML = text;
        pauseBtn.classList = 'pause';
        resumeBtn.classList = 'resume';
        pre.classList = 'text'
        log.appendChild(pre);
        log.appendChild(pauseBtn);
        log.appendChild(resumeBtn)
      }

      const file = photo.querySelector('.photocartochka').querySelector('.photka').src
      const lang = 'rus'

      recognize(file, lang, updateProgress)
      .then(setResult);
      
    } else {
      log.style.display = 'none'
      log.innerHTML = '';
    }
  })
})

const speakBtns = document.querySelectorAll('#listen') // получаем кнопку озвучки
speakBtns.forEach((speakBtn) => {
  speakBtn.addEventListener('click', () => {
    const div = speakBtn.closest('.detailInfo')
    const buttons = div.querySelectorAll('button')
    convertTextToSpeech()
    initializeHandlers(buttons)
  })
})

// speakBtn.addEventListener('click', (event) => {
//   console.log('event', event)
//   console.log('jopnsflgknsdpgkljnsdg;lsdngl;')
//   convertTextToSpeech()
//   initializeHandlers()
//   // let text = photo.querySelector('.text')
//   // console.log('text', text)
// })


function initializeHandlers(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", ({ target: { className } }) => {
      console.log('button', button)
      switch (className) {
        case "speak":
          if (!speechSynthesis.speaking) {
            convertTextToSpeech();
          }
          break;
        case "pause":
          return speechSynthesis.pause();
        case "resume":
          return speechSynthesis.resume();
        default:
          return;
      }
    });
  })
}


const speech = new SpeechSynthesisUtterance()

function convertTextToSpeech() {
  const text = document.querySelector('.text').textContent
  speech.text = text
  speech.lang = 'rus'
  speechSynthesis.speak(speech)
}


