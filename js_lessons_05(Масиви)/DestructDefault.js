// Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. 
// Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). 
// Виведіть ці змінні


let user = [prompt('Ведіть рядок:')]

const [, secondLetter, , fourthLetter='!', fifthLetter='!'] = user;

console.log("Друга літера:", firstLetter);
console.log("Четверта літера:", fourthLetter);
console.log("П'ята літера:", fifthLetter);
