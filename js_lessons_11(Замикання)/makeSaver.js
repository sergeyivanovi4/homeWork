// Напишіть функцію makeSaver, яка:
    let saver = makeSaver(Math.random) //створює функцію-сховище результату переданої як параметр функції (Math.random 
                                      // у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
    let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
    let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану 
                                      //в makeSaver функцію;
    alert(`Random: ${value1} === ${value2}`)

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
    })
    let value3 = saver2()
    let value4 = saver2()

    value3 === value4 // теж має бути true

    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)
// Таким чином makeSaver вирішує два завдання:
// Назавжди зберігає результат функції. Це актуально, наприклад, для Math.random.
// Діє ліниво, тобто викликає Math.random тільки тоді, коли результат дійсно потрібний. Якщо ж з якихось причин значення не знадобиться, то Math.random навіть не буде викликано


function makeSaver(func) {
    let result; // Змінна для зберігання результату

    return function() {
        if (!result) { // Якщо результат ще не збережено
            result = func(); // Викликаємо передану функцію та зберігаємо результат
        }
        return result; // Повертаємо збережений результат
    };
}