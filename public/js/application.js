const { body } = document;
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const hintBtn = document.querySelector('.hintBtn');
const hint1 = document.querySelector('.hint1');
const hint2 = document.querySelector('.hint2');
const hints= document.querySelector('.hints');
const text1 = document.querySelector('.text1');
const arrow1 = document.querySelector('.arrow1');
const offHint = document.querySelector('.offHint');
const model1 = document.querySelector('.model1');
const model2 = document.querySelector('.model2');
const dangerDelete = document.querySelector('.dangerDelete');
const detailPhotoInfo = document.querySelector('.detailPhotoInfo');
const yeah1 = document.querySelector('.yeah1');
const nope1 = document.querySelector('.nope1');
const yeah2 = document.querySelector('.yeah2');
const nope2 = document.querySelector('.nope2');

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

dangerDelete?.addEventListener('click', (event) => {
  model1.style.display = 'block';
  model1.style.zIndex = '5'
  body.backgroundColor = 'rgb(161, 147, 114)';
  footer.style.opacity = 0.33;
  hint1.style.opacity = 0.33;
  hint2.style.opacity = 0.33;
  hints.style.opacity = 0.33;
  header.style.scale = 2;
  detailPhotoInfo.style.opacity = 0.33;
  header.innerText = 'Вы точно хотите удалить фото?'
});

nope1?.addEventListener('click', (event) => {
  model1.style.display = 'none';
  model1.style.zIndex = '0'
  body.backgroundColor = 'rgb(255, 248, 231)';
  footer.style.opacity = 1;
  hint1.style.opacity = 1;
  hint2.style.opacity = 1;
  hints.style.opacity = 1;
  header.style.scale = 1;
  detailPhotoInfo.style.opacity = 1;
  header.innerText = 'Добро пожаловать в Babushkagram'
});

yeah1?.addEventListener('click', (event) => {
  model1.style.display = 'none';
  model1.style.zIndex = '-1'
  model2.style.display = 'block';
  model2.style.zIndex = '5'
  body.backgroundColor = 'rgb(161, 147, 114)';
  footer.style.opacity = 0.33;
  hint1.style.opacity = 0.33;
  hint2.style.opacity = 0.33;
  hints.style.opacity = 0.33;
  header.style.scale = 2;
  detailPhotoInfo.style.opacity = 0.33;
  header.innerText = 'Прям точно? Восстановить потом уже нельзя будет!!'
});

nope2?.addEventListener('click', (event) => {
  model2.style.display = 'none';
  model2.style.zIndex = '0'
  body.backgroundColor = 'rgb(255, 248, 231)';
  footer.style.opacity = 1;
  hint1.style.opacity = 1;
  hint2.style.opacity = 1;
  hints.style.opacity = 1;
  header.style.scale = 1;
  detailPhotoInfo.style.opacity = 1;
  header.innerText = 'Добро пожаловать в Babushkagram'
});

document.addEventListener('click', async (event) => {
  if(event.target.dataset.del === 'deleteBtn'){
    const pictureId = event.target.dataset.delid
    try {
      const response = await fetch('/babushkagram/onephoto', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ pictureId }),
      });
      if (response.ok) {
        window.location = "/babushkagram/profile"
      }
    } catch (error) {
      console.log(error);
    }
  }
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
