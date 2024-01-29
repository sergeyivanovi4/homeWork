// Вивчіть вбудовану функцію bind, і зробіть свою версію, яка дозволить визначити "значення за замовчуванням" не тільки для перших параметрів, але для будь-яких інших, наприклад для ступеня в Math.pow:

let pow5 = myBind(Math.pow, Math, [, 5]) // перший параметр - функція для біндингу значень за замовчуванням, 
                                                  // другий - this для цієї функції, третій - масив, в якому undefined означає
                                                  // параметри, які мають передаватися під час виклику,
                                                  // інші значення є значеннями за замовчуванням:
let cube = myBind(Math.pow, Math, [, 3]) // cube зводить число в куб

pow5(2) // => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
pow5(4) // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
cube(3) // => 27

let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
chessMin(-1,-5,3,15) // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5

let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
                                                           // а текст запрошення користувача задається під час виклику zeroPrompt
let someNumber = zeroPrompt("Введіть число") // викликає prompt("Введіть число","0")

const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
bindedJoiner('a','c','d') === 'abcdef'
bindedJoiner('1','2','3') === '1b23ef'

// Масив, який йде третім параметром, визначає, які поля повинні підмінятися значенням за замовчуванням, а які - задаватися надалі (undefined).


function myBind(func, context, defaults) {
    return function(...args) {
        const mergedArgs = defaults.map((val, index) => val === undefined ? args[index] : val);
        return func.apply(context, mergedArgs);
    };
}