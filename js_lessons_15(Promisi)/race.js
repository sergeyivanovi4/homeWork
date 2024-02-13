// Використовуючи Promise.race, запустіть запит на API (swapi.dev) паралельно з delay.
//  За результатом визначте, що було швидше, запит по мережі або певний інтервал часу. 
//  Підберіть параметр delay так, щоб результат був невідомий спочатку,
//   і при багаторазових запусках швидше був то delay, то fetch.

const fetchPromise = fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(data => {
        console.log('Fetch completed:', data);
        return data;
    })
    .catch(error => {
        console.error('Fetch error:', error);
        throw error;
    });

const delayPromise = new Promise(resolve => {
    const delay = Math.random() * 2000 + 1000; // Випадкова затримка від 1 до 3 секунд
    setTimeout(() => {
        console.log('Delay completed');
        resolve('Delay completed');
    }, delay);
});

Promise.race([fetchPromise, delayPromise])
    .then(winner => {
        console.log('Winner:', winner);
    })
    .catch(error => {
        console.error('Error:', error);
    });
