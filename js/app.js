let cards = document.querySelectorAll('.card');
let popup = document.querySelector('.popup')
let popupimg = popup.querySelector('img')



function openPopup (event){
   popup.classList.add('active')
  popupimg.src = event.target.src;
}

function closePopup(event) {
  if (event.target.classList.contains('popup')) {
    popup.classList.remove('active');
  }
}

popup.addEventListener('click', closePopup);

cards.forEach(card => {
  card.addEventListener('click', openPopup )
})