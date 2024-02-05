// function Password(parent, open){
// }

// let p = new Password(document.body, true)

// p.onChange = data => console.log(data)  //буде корисно при виконаннi LoginForm та Password Verify
// p.onOpenChange = open => console.log(open)

// p.setValue('qwerty')
// console.log(p.getValue())

// p.setOpen(false)
// console.log(p.getOpen())

// Напишіть функцію конструктор Password, яка буде в батьківському елементі (parent) створювати поле введення 
// для пароля та кнопку/іконку/чекбокс, який перемикатиме режим перегляду пароля в полі введення. 
// (видимий пароль чи ні, input type='text' або input type='password')
// Параметри:
// parent - батьківський елемент
// open - стартовий стан
// Методи:
// setValue/getValue - задають/читають значення
// setOpen/getOpen - задають/читають відкритість тексту у полі введення
// Колбеки (функції зворотного виклику, що можливо, будуть задані зовні конструктора):
// onChange - запускається за подією oninput у полі введення, передає текст у колбек
// onOpenChange - запускається зі зміни стану відкритості пароля
// Цi колбеки стануться в нагодi в наступних завданнях.
// Для Password Verify додайте, також, метод setStyle, щоби мати можливiсть задати стиль
//  input не втручаючись в код Password

function Password(parent, open) {
    const input = document.createElement('input');
    input.type = open ? 'text' : 'password';
    parent.appendChild(input);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = open ? 'Hide' : 'Show';
    parent.appendChild(toggleButton);

    input.addEventListener('input', () => {
        if (this.onChange) {
            this.onChange(input.value);
        }
    });

    toggleButton.addEventListener('click', () => {
        open = !open;
        input.type = open ? 'text' : 'password';
        toggleButton.textContent = open ? 'Hide' : 'Show';
        if (this.onOpenChange) {
            this.onOpenChange(open);
        }
    });

    this.setValue = function(value) {
        input.value = value;
    };

    this.getValue = function() {
        return input.value;
    };

    this.setOpen = function(value) {
        open = value;
        input.type = open ? 'text' : 'password';
        toggleButton.textContent = open ? 'Hide' : 'Show';
    };

    this.getOpen = function() {
        return open;
    };
}

// Приклад використання
let p = new Password(document.body, true);

p.onChange = data => console.log(data);
p.onOpenChange = open => console.log(open);

p.setValue('qwerty');
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());


