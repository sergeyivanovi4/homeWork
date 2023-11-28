// Запитайте у користувача ПІБ, використовуючи prompt тричі. Викиньте зайві пробiли, використовуючи .trim
// Використовуючи String: capitalize зробіть так, щоб кожне слово у ПІБ було з великої літери, 
// а решта - маленькі

// Об'єднайте ці три рядки в один змінний fullName і виведіть кудись (alert, console.log). 
// Не забудьте пробiли між словами.

let name = prompt('Введіть Ваше ім\'я, будьласка').trim()
let secondName = prompt(' А зараз по-батькові, будьласка').trim()
let lastName = prompt ('І на останок: Ваше прізвищє:').trim()

let Name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
let SecondName = secondName.slice(0,1).toUpperCase() + secondName.slice(1).toLowerCase();
let LastName = lastName.slice(0,1).toUpperCase() + lastName.slice(1).toLowerCase();

alert('Ваше ПІБ: ' + Name + " " + SecondName + " " + LastName)





