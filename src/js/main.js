var button = document.querySelector('#btn');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var dialog = document.querySelector('#dialog');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  dialog.textContent = 'Всплывающее окно';
  addText(': самоликвидация через ');
  for (var i = 5; i > 0; i--) {
    setTimeout(addText, (5 - i) * 1000, i + '..')
  }
  setTimeout(closeModal, 5000);
});

close.addEventListener('click', function() {
  closeModal();
});

function closeModal() {
  modal.classList.remove('modal_active');
};

function addText(text) {
  dialog.textContent += text;
};