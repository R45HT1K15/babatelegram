document.addEventListener('click', async (event) => {
  if (event.target.dataset.like === 'like') {
    console.log(event.target);
    const button = event.target.closest('button');
    const pictureId = event.target.dataset.pictureid;
    event.preventDefault();
    const response = await fetch('/babushkagram/like', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ pictureId }),
    });
    const { created } = await response.json();
    if (created) {
      const newLike = `<svg data-like="like" data-pictureid=${pictureId} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
        class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg> `;
      button.innerHTML = newLike;
    }
  }
});
