// Оформите задание Form как функцию, которая принимает любой объект как параметр
//  и создает форму на экране.

// Функція для створення форми з будь-якого об'єкта
function createFormFromObject(obj) {

    const form = document.createElement('form');

    // Перебір ключів об'єкта
    for (const key in obj) {

        const label = document.createElement('label');
        label.textContent = `${key}: `;

        // Створення введення відповідно до типу значення
        const input = document.createElement('input');
        input.setAttribute('name', key);
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

//
// Прриклад:
//

const car = {
    "Name": "chevrolet chevelle malibu",
    "Cylinders": 8,
    "Displacement": 307,
    "Horsepower": 130,
    "Weight_in_lbs": 3504,
    "Origin": "USA",
    "in_production": false
};
document.body.appendChild(createFormFromObject(car));
