// За допомогою наступного коду отримати та вивести інформацію про Люка Скайвокера:
// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(luke => console.log(luke))
// Напишіть функцію для відображення будь-якого JSON у формі таблиці. Функція повинна приймати два параметри:
// DOM - елемент, у якому будується таблиця
// JSON, який потрібно відобразити.
// Використайте цю функцiю для виведення iнформацiї про Люка або iнший об'єкт з сервicу swapi.dev

fetch('https://swapi.dev/api/people/1/')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(luke => console.log(luke))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

//   
// 

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
        td.textContent = value;
        dataRow.appendChild(td);
    });
    tbody.appendChild(dataRow);
    table.appendChild(tbody);

    // Додаємо таблицю до батьківського елементу
    parentElement.appendChild(table);
}

// Виведення інформації про Люка у формі таблиці
fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(luke => displayJSONAsTable(document.body, luke));
