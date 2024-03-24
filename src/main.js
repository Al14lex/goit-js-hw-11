
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-apy';



// main.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form'); // Звертаємося до форми за ідентифікатором
  form.addEventListener('submit', handleSubmit); // Додаємо обробник події на сабміт форми
});

function handleSubmit(event) {
  event.preventDefault(); // Запобігаємо стандартній поведінці форми
  
  const queryInput = document.getElementById('query'); // Звертаємося до текстового поля за ідентифікатором
  const query = queryInput.value.trim(); // Отримуємо та обрізаємо значення поля

  // Перевіряємо, чи рядок не порожній
  if (!query) {
    alert('Будь ласка, введіть текст для пошуку.');
    return; // Вихід з функції, щоб не продовжувати виконання коду
  }

  // Тут можна додати код для виконання запиту з використанням введеного тексту
  console.log(`Виконуємо пошук за запитом: "${query}"`);
  
  // Очищуємо поле форми після виконання запиту (опціонально)
  queryInput.value = '';
}

// Тут можна додати додаткові функції, наприклад, для виконання HTTP-запитів
