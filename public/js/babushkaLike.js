document.addEventListener('click', async (event) => {
  // console.log('event', event.target);

  if (event.target.dataset.like === 'like') {
    event.preventDefault();
    const div = event.target.closest('.likecontainer');
    const pictureId = event.target.dataset.pictureid;
    try {
      const response = await fetch('/babushkagram/like', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ pictureId }),
      });
      const { answer, countLike } = await response.json();
      if (answer) {
        const newLike = `<div class="logo counts">
        <div>${countLike}</div>
        <button class="like">
          <img
            data-like="deslike"
            data-pictureid=${pictureId}
            class="bi-heart"
            src="/img/like.png"
            alt="like"
          />
        </button>
      </div>`;
        div.innerHTML = newLike;
      }
    } catch (error) {
      console.log(error);
    }
  } else if (event.target.dataset.like === 'deslike') {
    event.preventDefault();
    const div = event.target.closest('.likecontainer');
    const pictureId = event.target.dataset.pictureid;
    try {
      const response = await fetch('/babushkagram/like', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ pictureId }),
      });
      const { answer, countLike } = await response.json();
      if (answer === 1) {
        const desLike = `<div class="logo counts">
                        <div>${countLike}</div>
                        <button class="like">
                          <img
                            data-like="like"
                            data-pictureid=${pictureId}
                            class="bi-heart"
                            src="/img/deslike.png"
                            alt="deslike"
                          />
                        </button>
                      </div>`;
        div.innerHTML = desLike;
      }
    } catch (error) {
      console.log(error);
    }
  }
});
