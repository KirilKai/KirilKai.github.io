const cards = document.querySelectorAll('.card');

//Disable see more function from the text contentx that the height is less than the minimum visible height of a text content on page load.
window.onload = function () {
  cards.forEach((card) => {
    let seeMoreBtn = card.querySelector('.see-more-btn');
    let textContent = card.querySelector('.card-content .text');
    if (textContent.scrollHeight == textContent.clientHeight) {
      seeMoreBtn.style.display = 'none';
      textContent.style.height = 'fit-content';
    } else {
      card.classList.add('gradient');
    }
  });
};

//See more function on click the see more button on each card.
cards.forEach((card) => {
  let seeMoreBtn = card.querySelector('.see-more-btn');
  let textContent = card.querySelector('.card-content .text');

  seeMoreBtn.addEventListener('click', () => {
    card.classList.toggle('active');
    card.classList.toggle('gradient');

    if (card.classList.contains('active')) {
      seeMoreBtn.innerHTML = 'See Less';
      textContent.style.height = textContent.scrollHeight + 'px';
    } else {
      seeMoreBtn.innerHTML = 'See More';
      textContent.style.height = '100px';
    }
  });
});
