
// За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. 
// Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. 
// Значення менше 16ти поки що можна не враховувати.


// let red = +prompt("Введіть число 'red' у  десятковій системі: ");
// let green = +prompt("Введіть число 'green'  у  десятковій системі: ");
// let blue = +prompt("Введіть число 'blue'  у  десятковій системі: ");

// let Red = red.toString(16)
// let Green = green.toString(16)
// let Blue = blue.toString(16)

// alert("У Вас вийшов кольор: #" + Red + Green + Blue);

// або

let red = (+prompt("Введіть число 'red' у  десятковій системі: ")).toString(16);
let green = (+prompt("Введіть число 'green'  у  десятковій системі: ")).toString(16);
let blue = (+prompt("Введіть число 'blue'  у  десятковій системі: ")).toString(16);

alert("У Вас вийшов колір: #" + red + green + blue);