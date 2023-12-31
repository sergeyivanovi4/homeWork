// Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. 
// Виведіть, яким за рахунком є це слово у рядку з кількох слів. 
// Якщо слово не знайдено, виведіть повідомлення про це (а не -1)

let user = prompt('Будь який рядок з кількох слів, буть ласка:')


let targetWord = prompt("Введіть слово, яке ви шукаєте:");

// Розділіть рядок на слова
const words = user.split(' ');

// Знайдіть індекс потрібного слова у масиві
const wordIndex = words.indexOf(targetWord);


if (wordIndex !== -1) {
  alert(`Слово "${targetWord}" знаходиться на позиції ${wordIndex + 1} у рядку.`);
} else {
  alert(`Слово "${targetWord}" не знайдено у рядку.`);
}
