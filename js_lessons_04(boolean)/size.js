// Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір.\
// Використовуйте prompt, умови порівняння та alert.


let sizes = prompt("Ваш розмір Верхної одежі: ")
if (sizes === "36") {
    alert("Ваш розмір в США: 6 = 'S'")
} 
if (sizes === "38") {
    alert("Ваш розмір в США: 8 = 'M'")
} 
if (sizes === "40") {
    alert("Ваш розмір в США: 10")
} 
if (sizes === "42") {
    alert("Ваш розмір в США: 12 = 'L'")
} 
if (sizes === "44") {
    alert("Ваш розмір в США: 14")
} 
if (sizes === "46") {
    alert("Ваш розмір в США: 16 = 'XL'")
} 
if (sizes === "48") {
    alert("Ваш розмір в США: 18")
} 
if (sizes === "50") {
    alert("Ваш розмір в США: 20 = 'XXL'")
} 




// Отримання розміру від користувача (Варіант №2)

var sizeInEUR = prompt("Введіть розмір у європейській системі (EUR)");

// Перевірка, чи користувач ввів число
if (!isNaN(sizeInEUR)) {
    // Переклад розміру до американської системи
    var sizeInUS = "";

    if (sizeInEUR <= 34) {
        sizeInUS = "XS";
    } else if (sizeInEUR <= 36) {
        sizeInUS = "S";
    } else if (sizeInEUR <= 38) {
        sizeInUS = "M";
    } else if (sizeInEUR <= 40) {
        sizeInUS = "L";
    } else {
        sizeInUS = "XL";
    }

    // Виведення результату
    alert("Розмір в американській системі: " + sizeInUS);
} else {
    // Виведення повідомлення про помилку
    alert("Будь ласка, введіть число.");
}