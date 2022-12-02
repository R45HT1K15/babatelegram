const btnWatch = document.querySelector('[data-watch]');
const listWhithVnucki = document.querySelector('.listOfRelatives');

document.addEventListener('click', async (event) => {
  if (event.target.dataset.watch === 'watch') {
    event.preventDefault();

    if (listWhithVnucki.style.display === 'none') {
      listWhithVnucki.style.display = 'block';
      event.target.innerText = 'СКРЫТЬ';
    } else if (listWhithVnucki.style.display === 'block') {
      listWhithVnucki.style.display = 'none';
      event.target.innerText = 'СМОТРЕТЬ';
    }
  }

  if (event.target.dataset.vnuk === 'vnuk') {
    event.preventDefault();
    const { idvnuk } = event.target.dataset;
    try {
      const response = await fetch('/babushkagram/vnuck', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ idvnuk }),
      });
      const { answer } = await response.json();
      if (answer === 1) {
        event.target.closest('.vnukDeleteBabushka').remove();
        if (document.querySelectorAll('.vnukDeleteBabushka').length === 0) {
          const notVnuck = ` <div class="norelatives">
            На вас не подписан ни один внук
          </div>`;
          const ol = document.querySelector('[data-list]');

          ol.insertAdjacentHTML('afterbegin', notVnuck);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
});
