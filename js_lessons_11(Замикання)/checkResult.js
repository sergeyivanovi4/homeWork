// Напишіть декоратор checkResult, який:
// приймає функцію для запуску (оригінал)
// приймає функцію для перевірки результату (валідатор)
// повертає обгортку, яка запускає оригінал доти, доки оригінал не поверне значення, що задовольняє функції-валідатору. У валідатор передається результат оригінальної функції. Якщо валідатор повертає true, то обгортка повертає результат. оригінальної функції. Якщо валідатор повертає щось інше, то оригінал запускається ще, доти, доки валідатор не поверне true.
function checkResult(original, validator){
    function wrapper(...params){
    }
    return wrapper
}

//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, x => !isNaN(+x)) 
let   number       = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

//gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
const gamePrompt   = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase())) 
const turn         = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")
// Використовуючи checkResult зробіть функції, які:
// RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
// AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)


function checkResult(original, validator) {
    function wrapper(...params) {
        let result;
        do {
            result = original.apply(this, params);
        } while (!validator(result));
        return result;
    }

    return wrapper;
}