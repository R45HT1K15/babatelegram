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
        <button id=${babushka.id} data-delbaba=${babushka.id} type="submit" class="btnAuth">Удалить</button>
      </div>
      `
      listContainer?.insertAdjacentHTML('beforeend', newBaba);
      const deleteBthLastBaba = listContainer.getElementById(`#${babushka.id}`);
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
      const { answer } = await response.json();
      console.log('a ========================', { answer });
      if (answer === 1) {
        btn.closest('.vnukDeleteBabushka').remove()
      }
    } catch (error) {
      console.log(error);
    }
})
}

delBaba.forEach((el) => deleteBabaEventListener(el));
