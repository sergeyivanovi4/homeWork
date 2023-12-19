// Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та 
// масив некоректних слів (['бляха', 'муха', "пляшка", "шабля"], наприклад). 
// Функція повинна повертати рядок без цих некоректних слів.

// let user = prompt('Будь який рядок з кількох слів, буть ласка:')
// // Розділіть рядок на слова
// const words = user.split(' ');                    // Розділіть введений рядок на слова
// const filterWords = ['bad', 'evil', 'fuck']
// const filtered = words.filter(word => !filterWords.includes(word))     // Використовуйте функцію filter для видалення некоректних слів
// const resultString = filtered.join(' ');          // Об'єднайте слова у рядок
// console.log(resultString);


function filterLexics(inputString, lexicsToFilter) {

    const words = inputString.split(' ');
    const filteredWords = words.filter(word => !lexicsToFilter.includes(word.toLowerCase()));
    const resultString = filteredWords.join(' ');

    return resultString;
}

// Приклад використання:
const userString = prompt('Будь-який рядок з кількох слів, будь ласка:');
const lexicsToFilter = ['бляха', 'муха', 'пляшка', 'шабля'];

const filteredString = filterLexics(userString, lexicsToFilter);
console.log(filteredString);