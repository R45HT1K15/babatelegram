document.addEventListener('click', async (event) => {

  // console.log('event', event.target);
  
  if (event.target.dataset.like === 'like') {
    event.preventDefault();
    const div = event.target.closest('.likecontainer');
    console.log('event.target.closest(\'.likecontainer\')', event.target.closest('.likecontainer'))
    console.log('div', div)
    const pictureId = event.target.dataset.pictureid;
    console.log('event.target.dataset.pictureid', event.target.dataset.pictureid)
    console.log('pictureId', pictureId)
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
        const newLike = ` <div
        class="logo counts"
        data-like="deslike"
        data-pictureid=${pictureId}
      >
      <div>${countLike}</div>
        <button class="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </button>
      </div>`;
        div.innerHTML = newLike;
        console.log('div.innerHTML', div.innerHTML)
        console.log('newLike', newLike)
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
        const desLike = `<div
        class="logo counts"
        data-like="like"
        data-pictureid=${pictureId}
      >
      <div>${countLike}</div>
        <button class="like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
             d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
      </div>`;
        div.innerHTML = desLike;
      }
    } catch (error) {
      console.log(error);
    }
  }
});
