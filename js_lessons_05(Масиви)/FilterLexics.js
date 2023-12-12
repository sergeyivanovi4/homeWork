// Нехай користувач вводить рядок. Розбийте його за пробілами. 
// Використовуючи filter поверніть true якщо елемент масиву не полягає у визначеному масиві неприпустимих слів. 
// Якщо елемент масиву - неприпустиме слово, функція, передана в filter повинна повертати false. 
// Зберіть масив у рядок назад.


let user = prompt('Будь який рядок з кількох слів, буть ласка:')

// Розділіть рядок на слова
const words = user.split(' ');

const filterWords = ['bad', 'evil', 'fuck']

const filtered = words.filter(word => !filterWords.includes(word))

const resultString = filtered.join(' ');
console.log(resultString);
