var show = document.querySelector('.address-button')
var popup = document.querySelector('.modal')
var close = popup.querySelector('.modal-button-close')

show.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal-show');
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal-show');
});