// Запитайте у користувача текст і перевірте його на наявність некоректного 
// слова або кількох некоректних слів. Використовуйте метод indexOf (або includes) рядки:
// "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не знайдено

const userInput = prompt("Введіть текст:");

const badWords = ["bad", "fuck", "bomb"];

let containsBadWord = false;

for (const word of badWords) {
    if (userInput.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
        containsBadWord = true;
        break;
    }
}

if (containsBadWord) {
    alert("Текст містить некоректне слово або слова.");
} else {
    alert("Текст введений коректно.");
}