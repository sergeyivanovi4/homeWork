// Оформіть попереднє завдання як функцію-конструктор. 
// Продумайте та передбачте гетери, сетери та колбеки.

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



// 
// 
// 

function LoginForm(parent) {
    // Створюємо форму логіна
    const loginForm = document.createElement('form');
    parent.appendChild(loginForm);

    // Створюємо поле логіна
    const loginInput = document.createElement('input');
    loginInput.type = 'text';
    loginInput.placeholder = 'Логін';
    loginForm.appendChild(loginInput);

    // Створюємо поле пароля
    const password = new Password(loginForm, false);

    // Створюємо кнопку входу
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Увійти';
    loginForm.appendChild(submitButton);

    // Метод, який повертає значення логіна
    this.getLogin = function() {
        return loginInput.value.trim();
    };

    // Метод, який встановлює значення логіна
    this.setLogin = function(value) {
        loginInput.value = value;
    };

    // Метод, який повертає стан відкритості пароля
    this.getPasswordOpen = function() {
        return password.getOpen();
    };

    // Метод, який встановлює стан відкритості пароля
    this.setPasswordOpen = function(value) {
        password.setOpen(value);
    };

    // Метод, який встановлює колбек для події зміни значення логіна
    this.onLoginChange = function(callback) {
        loginInput.addEventListener('input', callback);
    };

    // Метод, який встановлює колбек для події зміни стану відкритості пароля
    this.onPasswordOpenChange = function(callback) {
        password.onOpenChange = callback;
    };

    // Метод, який встановлює колбек для події відправки форми
    this.onSubmit = function(callback) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            callback();
        });
    };

    // Ініціалізуємо стан кнопки входу
    submitButton.disabled = true;
}

// Приклад використання
const loginForm = new LoginForm(document.body);

loginForm.onLoginChange(function() {
    console.log('Логін змінено на: ', loginForm.getLogin());
});

loginForm.onPasswordOpenChange(function(open) {
    console.log('Стан відкритості пароля: ', open);
});

loginForm.onSubmit(function() {
    if (loginForm.getLogin() !== '' && loginForm.getPasswordOpen()) {
        alert('Успішно ввійшли!');
    } else {
        alert('Будь ласка, заповніть логін та пароль!');
    }
});
