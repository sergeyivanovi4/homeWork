
// Розширити функцію відображення:
// Якщо одне з полів рядок чи масив.
// Якщо рядки у масивi чи рядок містять у собі https://swapi.dev/api/
// То виводити замість тексту рядки кнопку, при натисканні на яку:
// робиться fetch даних за цим посиланням
// функція відображення запускає сама себе (рекурсивно) для відображення нових даних у тому елементі.

function displayJSONAsTable(parentElement, jsonData) {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Додаємо заголовок таблиці
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const keys = Object.keys(jsonData);
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Додаємо дані в таблицю
    const values = Object.values(jsonData);
    const dataRow = document.createElement('tr');
    values.forEach(value => {
        const td = document.createElement('td');
        if (Array.isArray(value)) {
            // Якщо значення - масив, відображаємо кожен елемент масиву у власному рядку
            const ul = document.createElement('ul');
            value.forEach(item => {
                const li = document.createElement('li');
                if (typeof item === 'string' && item.startsWith('https://swapi.dev/api/')) {
                    // Якщо рядок містить URL з посиланням на swapi, створюємо кнопку для витягнення даних
                    const button = document.createElement('button');
                    button.textContent = 'Fetch data';
                    button.addEventListener('click', () => {
                        fetch(item)
                            .then(res => res.json())
                            .then(data => {
                                // Видаляємо попередні дані, якщо вони були
                                while (ul.firstChild) {
                                    ul.removeChild(ul.firstChild);
                                }
                                // Відображаємо нові дані у вкладеному списку
                                displayJSONAsList(li, data);
                            })
                            .catch(error => console.error('Error fetching data:', error));
                    });
                    li.appendChild(button);
                } else {
                    // Відображаємо елемент масиву у власному рядку
                    li.textContent = item;
                }
                ul.appendChild(li);
            });
            td.appendChild(ul);
        } else if (typeof value === 'string' && value.startsWith('https://swapi.dev/api/')) {
            // Якщо значення - рядок і містить URL з посиланням на swapi, відображаємо кнопку для витягнення даних
            const button = document.createElement('button');
            button.textContent = 'Fetch data';
            button.addEventListener('click', () => {
                fetch(value)
                    .then(res => res.json())
                    .then(data => {
                        // Відображаємо нові дані у цьому ж елементі
                        displayJSONAsTable(td, data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });
            td.appendChild(button);
        } else {
            // Відображаємо значення у власному рядку
            td.textContent = value;
        }
        dataRow.appendChild(td);
    });
    tbody.appendChild(dataRow);
    table.appendChild(tbody);

    // Додаємо таблицю до батьківського елементу
    parentElement.appendChild(table);
}

// Викликаємо функцію з відображенням інформації про Люка у формі таблиці
fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => displayJSONAsTable(document.body, luke));
