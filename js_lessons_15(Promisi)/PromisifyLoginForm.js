// Проміссифікуйте конструктор LoginForm. У промісифіковану функцію передається DOM-елемент - батько для форми,
// У колбеку, призначеному для отримання логіна та пароля в момент натискання кнопки "Login...", 
// який ви призначаєте в об'єкті LoginForm, зарезолвіт проміс. Результатом промісу має бути об'єкт із ключами
//  login та password, ключі повинні містити значення полів введення.
// function loginPromise(parent){
//     function executor(resolve, reject){
//         const form = new LoginForm(parent)
//         .......
//     }
    
//     return new Promise(executor)
// }

// loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))


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

// function LoginForm(parent) {
//     // Створюємо форму логіна
//     const loginForm = document.createElement('form');
//     parent.appendChild(loginForm);

//     // Створюємо поле логіна
//     const loginInput = document.createElement('input');
//     loginInput.type = 'text';
//     loginInput.placeholder = 'Логін';
//     loginForm.appendChild(loginInput);

//     // Створюємо поле пароля
//     const password = new Password(loginForm, false);

//     // Створюємо кнопку входу
//     const submitButton = document.createElement('button');
//     submitButton.textContent = 'Увійти';
//     loginForm.appendChild(submitButton);

//     // Метод, який повертає значення логіна
//     this.getLogin = function() {
//         return loginInput.value.trim();
//     };

//     // Метод, який встановлює значення логіна
//     this.setLogin = function(value) {
//         loginInput.value = value;
//     };

//     // Метод, який повертає стан відкритості пароля
//     this.getPasswordOpen = function() {
//         return password.getOpen();
//     };

//     // Метод, який встановлює стан відкритості пароля
//     this.setPasswordOpen = function(value) {
//         password.setOpen(value);
//     };

//     // Метод, який встановлює колбек для події зміни значення логіна
//     this.onLoginChange = function(callback) {
//         loginInput.addEventListener('input', callback);
//     };

//     // Метод, який встановлює колбек для події зміни стану відкритості пароля
//     this.onPasswordOpenChange = function(callback) {
//         password.onOpenChange = callback;
//     };

//     // Метод, який встановлює колбек для події відправки форми
//     this.onSubmit = function(callback) {
//         loginForm.addEventListener('submit', function(event) {
//             event.preventDefault();
//             callback();
//         });
//     };

//     // Ініціалізуємо стан кнопки входу
//     submitButton.disabled = true;
// }



function LoginForm(parent) {
    // Поля введення для логіна та пароля
    this.loginInput = new Password(parent, true);
    this.passwordInput = new Password(parent, true);

    // Кнопка "Login"
    this.loginButton = document.createElement('button');
    this.loginButton.textContent = 'Login';
    parent.appendChild(this.loginButton);

    // Функція для перевірки, чи є значення в обох полях введення
    this.checkInputs = function() {
        const loginValue = this.loginInput.getValue().trim();
        const passwordValue = this.passwordInput.getValue().trim();
        return loginValue !== '' && passwordValue !== '';
    };

    // Обробник події на поля введення, який встановлює доступність кнопки "Login"
    const self = this; // Зберігаємо посилання на поточний об'єкт
    this.inputChangeHandler = function() {
        self.loginButton.disabled = !self.checkInputs(); // Встановлюємо доступність кнопки відповідно до значень полів введення
    };

    // Додаємо обробники подій на поля введення
    this.loginInput.onChange = this.passwordInput.onChange = this.inputChangeHandler;

    // Обробник події на кнопці "Login", який буде викликати логінування користувача
    this.loginButton.addEventListener('click', function() {
        if (self.checkInputs()) {
            // Виконуємо логінування користувача
            console.log('Logged in with login:', self.loginInput.getValue(), 'and password:', self.passwordInput.getValue());
        } else {
            console.log('Both login and password are required.');
        }
    });

    // Метод для встановлення значення поля логіна
    this.setLoginValue = function(value) {
        this.loginInput.setValue(value);
    };

    // Метод для отримання значення поля логіна
    this.getLoginValue = function() {
        return this.loginInput.getValue();
    };

    // Метод для встановлення значення поля пароля
    this.setPasswordValue = function(value) {
        this.passwordInput.setValue(value);
    };

    // Метод для отримання значення поля пароля
    this.getPasswordValue = function() {
        return this.passwordInput.getValue();
    };

    // Геттер для доступності кнопки "Login"
    Object.defineProperty(this, 'loginButtonDisabled', {
        get: function() {
            return this.loginButton.disabled;
        }
    });

    // Сеттер для доступності кнопки "Login"
    Object.defineProperty(this, 'loginButtonDisabled', {
        set: function(value) {
            this.loginButton.disabled = value;
        }
    });

    // Задаємо початкові значення полів введення (якщо потрібно)
    this.setLoginValue('');
    this.setPasswordValue('');
}

// Використання
const loginForm = new LoginForm(document.body);
