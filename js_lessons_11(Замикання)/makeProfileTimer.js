// makeProfileTimer
// Напишіть функцію makeProfileTimer, яка служить для виміру часу виконання іншого коду і працює наступним чином:
    const timer = makeProfileTimer() 
    alert('Вимiрюємо час роботи цього alert');  //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
    alert(`${timer()} сек.`); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(), 
                   // тобто виміряти час виконання alert
    const timer2 = makeProfileTimer()
    prompt('')
    alert(`Час роботи двух аlert та одного prompt ${timer()} сек.`)
    alert(`Час роботи prompt та попереднього alert ${timer2()} сек.`)
// Використовуйте performance.now() для того, щоб запам'ятати момент часу. Ця функцiя повертає час у мiлiсекундах вiд моменту завантаження сторiнки.


function makeProfileTimer() {
    const start = performance.now();
    
    return function() {
        const end = performance.now();
        // return end - start;       // -- в мілісікундах
        const timeInSeconds = ((end - start) / 1000).toFixed(2);  // --- в секундах
        return timeInSeconds;
    };
}