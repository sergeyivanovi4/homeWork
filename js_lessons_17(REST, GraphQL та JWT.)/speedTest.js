// Написати асинхронну функцію
async function speedtest(getPromise, count,parallel=1){
// ....
    return {
        duration,
        querySpeed, //середня швидкість одного запиту
        queryDuration, //
        parallelSpeed,
        parallelDuration
    }
}

speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result))
// {duration: 10000, 
// querySpeed: 0.001, //1 тисячна запита за мілісекунду
// queryDuration: 1000, //1000 мілісекунд на один реальний запит у середньому
// parallelSpeed: 0.01  // 100 запитів за 10000 мілісекунд
// parallelDuration: 100 // 100 запитів за 10000 мілісекунд
speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5)
// де:
// count - кількість повторів
// parallel - кількість одночасних запитів/промісів в одному повторі
// getPromise - функція, яка вміє повернути потрібний Вам проміс для тестування швидкості його роботи
// яка буде в циклі count раз створювати parallel промісів за допомогою переданої функції getPromise, 
// чекати виконання всіх parallel промісів, після чого цикл повторюється.
// Виміряти час загальний час виконання, та обчислити:
// duration, загальну тривалість роботи циклу
// parallelDuration, середній час обробки запиту паралельно (за який час виконався parallel*count промісів),
// paralledSpeed, швидкість у запитах у мілісекунду
// queryDuration, реальний середній час запиту (відштовхуючись від count та часу роботи циклу).
// querySpeed, реальна середня швидкість запиту
// Ці змінні повернути в одному об'єкті-результаті (див. вище заготовку)
// Для налагодження спробуйте на delay (приклад вище є, реальний час відрізнятиметься на одиниці-десятки мілісекунд). Потім можете спробувати "swapi.dev". Не створюйте надто багато паралельних запитів.



async function speedtest(getPromise, count, parallel = 1) {
    const start = Date.now(); // Початок тесту
    let totalQueryDuration = 0; // Загальний час виконання запитів
    let totalParallelDuration = 0; // Загальний час виконання у паралельному режимі

    for (let i = 0; i < count; i++) {
        const startParallel = Date.now(); // Початок виконання паралельних промісів

        const promises = Array.from({ length: parallel }, () => getPromise());
        await Promise.all(promises);

        const endParallel = Date.now(); // Завершення виконання паралельних промісів

        totalParallelDuration += endParallel - startParallel;

        const queryDuration = (endParallel - startParallel) / parallel;
        totalQueryDuration += queryDuration;
    }

    const end = Date.now(); // Завершення тесту
    const duration = end - start; // Загальна тривалість роботи циклу

    const parallelDuration = totalParallelDuration / count; // Середній час обробки запиту паралельно
    const parallelSpeed = parallel / parallelDuration; // Швидкість у запитах у мілісекунду

    const querySpeed = 1 / totalQueryDuration; // Реальна середня швидкість запиту
    const queryDurationAverage = totalQueryDuration / count; // Реальний середній час запиту

    return {
        duration,
        querySpeed,
        queryDurationAverage,
        parallelSpeed,
        parallelDuration
    };
}


speedtest(() => delay(1000), 10, 10)
    .then(result => console.log(result))
    .catch(error => console.error(error));


speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5)
    .then(result => console.log(result))
    .catch(error => console.error(error));
