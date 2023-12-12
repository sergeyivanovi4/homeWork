// Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. 
// Виведіть їх

let user = [prompt('Ведіть рядок:')]

const [firstLetter, , , , fifthLetter, , , , ninthLetter] = user;

console.log("Перша літера:", firstLetter);
console.log("П'ята літера:", fifthLetter);
console.log("Дев'ята літера:", ninthLetter);
