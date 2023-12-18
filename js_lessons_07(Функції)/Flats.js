// Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для розв'язання задачі.
//  Функція повинна повертати об'єкт виду {entrance, floor}, де entrance - номер падiка,
//   floor - номер поверху, на якому знаходиться квартира.

// let floors = prompt("Введіть кількість поверхів у будинку:", "");
// let apartmentsFloor = prompt("Введіть кількість квартир на поверсі:", "");
// let flats = prompt("Введіть номер квартири:", "");

// let entrance = Math.ceil(flats / (floors * apartmentsFloor));
// let floor = Math.ceil((flats % (floors * apartmentsFloor)) / apartmentsFloor);

// alert("Під'їзд: " + entrance + "\nПоверх: " + floor);


function NumberFlats(floors, apartmentsFloor, flats) {
    let entrance = Math.ceil(flats / (floors * apartmentsFloor));
    let floor = Math.ceil((flats % (floors * apartmentsFloor)) / apartmentsFloor);

    return { entrance, floor };
}

// Приклад використання
const floors = 5;
const apartmentsFloor = 8; 
const flats = 27; 

const result = NumberFlats(floors, apartmentsFloor, flats);
console.log(result);

