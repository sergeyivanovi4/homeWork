// Нехай користувач вводить рядок. Розбийте його за пробілами. 
// Використовуючи map та тернарний оператор поверніть з функції слово без змін, 
// якщо воно не полягає в якомусь іншому масиві заборонених слів. Якщо слово полягає в цьому списку,
//  функція повинна повернути слово BEEP. Зберіть масив назад у рядок через пробіл.
//   Таким чином, ви зможете реалізувати заміну кількох заборонених слів на BEEP.


let user = prompt('Будь який рядок з кількох слів, буть ласка:')

// Розділіть рядок на слова
const words = user.split(' ');

const filterWords = ['bad', 'evil', 'fuck']

const transformedWords = words.map(word => filterWords.includes(word.toLowerCase()) ? "BEEP" : word);

const resultString = transformedWords.join(' ');
console.log(resultString);

