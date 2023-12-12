// Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, 
// програма генерує свій варіант через Math.random() і виводить через alert. 
// Наступний alert виводить ім'я переможця чи "нічия"


let user = prompt("Введіть свій варіант:\nкамінь\nножиці\nпапір").toLowerCase();
let computer = Math.random();
if (computer < 0.33) {
    computer = "камінь";
} else if (computer < 0.66) {
    computer = "ножиці";
} else {
    computer = "папір";
}

// Виводимо варіант комп'ютера
alert("Комп'ютер обрав: " + computer);

if (user === computer) {
    alert("Нічия!");
} else if (
    (user === "камінь" && computer === "ножиці") ||
    (user === "ножиці" && computer === "папір") ||
    (user === "папір" && computer === "камінь")
) {
    alert("Ви перемогли!");
} else {
    alert("Комп'ютер переміг. Спробуйте ще раз.");
}

