// Зробіть завдання Comparison: sizes використовуючи switch
// let sizes = prompt("Ваш розмір Верхної одежі: ")
// if (sizes === "36") {
//     alert("Ваш розмір в США: 6 = 'S'")
// } 
// if (sizes === "38") {
//     alert("Ваш розмір в США: 8 = 'M'")
// } 
// if (sizes === "40") {
//     alert("Ваш розмір в США: 10")
// } 
// if (sizes === "42") {
//     alert("Ваш розмір в США: 12 = 'L'")
// } 
// if (sizes === "44") {
//     alert("Ваш розмір в США: 14")
// } 
// if (sizes === "46") {
//     alert("Ваш розмір в США: 16 = 'XL'")
// } 
// if (sizes === "48") {
//     alert("Ваш розмір в США: 18")
// } 
// if (sizes === "50") {
//     alert("Ваш розмір в США: 20 = 'XXL'")
// } 

let sizes = prompt("Ваш розмір Верхної одежі: ")
switch (sizes) {
    case '36':
        alert("Ваш розмір в США: 6 = 'S'")
        break;
    case '38':
        alert("Ваш розмір в США: 8 = 'M'")
        break;
    case '40':
        alert("Ваш розмір в США: 10 = 'M'")
        break;
    case '42':
        alert("Ваш розмір в США: 12 = 'L'")
        break;
    case '44':
        alert("Ваш розмір в США: 14 = 'L'")
        break;
    case '46':
        alert("Ваш розмір в США: 16 = 'XL'")
        break;
    case '48':
        alert("Ваш розмір в США: 18 = 'XL'")
        break;
    case '50':
        alert("Ваш розмір в США: 20 = 'XXL'")
        break;
    default:
        alert("шото я не зрозумів")
}