// // Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). 
// Наприклад, якщо ви питаєте стать користувача з допомогою confirm, 
// то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")



let sex = prompt("Ви якої статі?\nПоставте '+' - Ви чоловік \nПоставте '-' - Ви жінка")
if (sex === "+") {
    alert("Ви чоловік! Вітаю")
} else {
    alert("На жаль - Ви жінка!")
}