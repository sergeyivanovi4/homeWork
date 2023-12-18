// Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту
// const car = {
//       "Name":"chevrolet chevelle malibu",
//       "Cylinders":8,
//       "Displacement":307,
//       "Horsepower":130,
//       "Weight_in_lbs":3504,
//       "Origin":"USA",
//       "in_production": false
// }
// На екрані має з'явитись форма з 7 рядків, з назвами полів, взятими з ключів та полями введення відповідних типів.
//  значеннями полів введення мають бути значення об'єкта.
// <form>
//     <label>Name: <input type="text" value="chevrolet chevelle malibu"/></label>
//     <label>Cylinders: <input type="number" value="8"/></label>
//     <label>Displacement: <input type="number" value="307"/></label>
//     <label>Horsepower: <input type="number" value="130"/></label>
//     <label>Weight_in_lbs: <input type="number" value="3504"/></label>
//     <label>Origin: <input type="text" value="USA"/></label>
//     <label>in_production: <input type="checkbox" /></label>
// </form>
// Для створення правильного типу тега input використовуйте оператор typeof Javascript:
// console.log(typeof 5)//number
// console.log(typeof "5") //string
// console.log(typeof (5 > 2))

const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
};

// Функція для створення форми з об'єкта
function createFormFromObject(obj) {
    const form = document.createElement('form');

    for (const key in obj) {
        const label = document.createElement('label');
        label.textContent = `${key}: `;

        const input = document.createElement('input');
        input.setAttribute('name', key);
        
        // Визначення типу введення відповідно до типу значення
        switch (typeof obj[key]) {
            case 'number':
                input.setAttribute('type', 'number');
                break;
            case 'boolean':
                input.setAttribute('type', 'checkbox');
                break;
            default:
                input.setAttribute('type', 'text');
                break;
        }

        // Встановлення значення з об'єкта
        input.value = obj[key];

        // Додавання лейблу та введення в форму
        label.appendChild(input);
        form.appendChild(label);
    }

    return form;
}

// Додавання форми на сторінку
document.body.appendChild(createFormFromObject(car));