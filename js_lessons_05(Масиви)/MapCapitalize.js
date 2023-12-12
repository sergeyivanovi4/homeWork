// Нехай користувач вводить рядок. Розбийте його за пробілами. 
// Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери. 
// Зберіть масив у рядок назад




let user = prompt('Будь який рядок з кількох слів, буть ласка:')

// Розділіть рядок на слова
const words = user.split(' ');

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

let capsWords = words.map(capitalize)

let result = capsWords.join(' ')
console.log(result)