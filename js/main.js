const cardButton = document.querySelector('#card-button'); /*поместили элемент с идентификатором тут хранится кнопка корзина*/

const modal = document.querySelector ('.modal');

const close = document.querySelector('.close');

cardButton.addEventListener('click', function(event) {
  modal.classList.add('is-open');
}); /* браузер следит за событием click при клике вызывается окно */

close.addEventListener('click', function(event) {
  modal.classList.remove('is-open');
});

new WOW().init();