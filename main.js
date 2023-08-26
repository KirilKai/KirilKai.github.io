const cards = document.querySelectorAll('.card');

//Disable see more function from the text contentx that the height is less than the minimum visible height of a text content on page load.
window.onload = function () {
  cards.forEach((card) => {
    let seeMoreBtn = card.querySelector('.see-more-btn');
    let textContent = card.querySelector('.card-content .text');
    let hiddenImage = card.querySelector('.hidden-image');

    if (textContent.scrollHeight == textContent.clientHeight) {
      seeMoreBtn.style.display = 'none';
      textContent.style.height = 'fit-content';
    } else {
      card.classList.add('gradient');
    }
    // hiddenImage.style.display = 'none';
  });
};

//See more function on click the see more button on each card.
cards.forEach((card) => {
  let seeMoreBtn = card.querySelector('.see-more-btn');
  let textContent = card.querySelector('.card-content .text');
  let hiddenImage = card.querySelector('.hidden-image');

  seeMoreBtn.addEventListener('click', () => {
    card.classList.toggle('active');
    card.classList.toggle('gradient');

    if (card.classList.contains('active')) {
      seeMoreBtn.innerHTML = 'See Less';
      textContent.style.height = textContent.scrollHeight + 'px';
      hiddenImage.style.display = 'block';
    } else {
      seeMoreBtn.innerHTML = 'See More';
      textContent.style.height = '100px';
      hiddenImage.style.display = 'none';
    }
  });
});

//Reveal on scroll
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('visible');
    } else {
      reveals[i].classList.remove('visible');
    }
  }
}

//Popup Image
document.querySelectorAll('.card .card-img img').forEach((image) => {
  image.onclick = () => {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  };
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
};
