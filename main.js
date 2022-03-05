const elButton = document.querySelector('.button-classlist');
const elText = document.querySelector('.none-text');

elButton.addEventListener('click', function () {
  elText.classList.add('block-text');
});