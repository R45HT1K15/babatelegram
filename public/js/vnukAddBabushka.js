const vnukAddBabushka = document.forms.addRelatives;
const listContainer = document.querySelector ('[data-list]');
const dubbleRelatives = document.querySelector('.slovo');
const delBaba = document.querySelectorAll('[data-delbaba]');

vnukAddBabushka.addEventListener('submit', async (event) => {
  event.preventDefault();
  const id = event.target.relatives.value;
  try {
    const response = await fetch ('/vnukogram/profile', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const { babushka, a, b } = await response.json();
    // console.log('{ a, b } ================ back', { babushka, a, b });
    if (b === false) {
      const doubleBaba = ` <div>родственник уже добавлен</div>`
      dubbleRelatives?.insertAdjacentHTML('beforeend', doubleBaba)
    }
    else {
      const newBaba = `
      <div class='vnukDeleteBabushka'>
        <li>${babushka.fio}(${babushka.login})</li>
        <button id=a${babushka.id} data-delbaba=${babushka.id} type="submit" class="btnAuth">Удалить</button>
      </div>
      `
      const noRelatives = document.querySelector('.norelatives');
      if (noRelatives) {
        noRelatives.remove();
      }
      listContainer?.insertAdjacentHTML('beforeend', newBaba);
      const deleteBthLastBaba = listContainer.querySelector(`#a${babushka.id}`);
      console.log('deleteBthLastBaba=======================', deleteBthLastBaba);
      deleteBabaEventListener(deleteBthLastBaba);
    }

  } catch (error) {
    console.log(error);
  }
  
})

function deleteBabaEventListener (btn) {
  btn.addEventListener ('click', async (event) => {
    console.log(btn)
    const babaID = btn.dataset.delbaba
    try {
      const response = await fetch ('/vnukogram/babushka', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ babaID }),
      })
      const { answer, anyBabushka } = await response.json();
      if (answer === 1) {
        btn.closest('.vnukDeleteBabushka').remove()
      }
      if (anyBabushka.Grandparents.length === 0) {
      const noBaba = `<div class='norelatives'>Вы ни на кого не подписаны</div>`        
      listContainer.insertAdjacentHTML('beforebegin', noBaba)
      }
    } catch (error) {
      console.log(error);
    }
})
}

delBaba.forEach((el) => deleteBabaEventListener(el));
