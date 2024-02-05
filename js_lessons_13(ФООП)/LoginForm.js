// За допомогою попереднього коду Password зробіть форму логіна, кнопка в якій буде активна лише якщо логин та пароль 
// не порожні.
// "За допомогою попереднього коду" означає, що в коді форми логіну ви використовуєте об'єкт, 
// сконструйований конструктором Password - const password = new Password(........)

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
// Створюємо форму логіна
const loginForm = document.createElement('form');
document.body.appendChild(loginForm);

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

// Функція, яка перевіряє, чи не порожні логін та пароль
function checkLoginAndPassword() {
    const login = loginInput.value.trim();
    const pass = password.getValue().trim();
    return login !== '' && pass !== '';
}

// Обробник події зміни значення в полях вводу
function handleInputChange() {
    submitButton.disabled = !checkLoginAndPassword();
}

// Додаємо обробники подій для полів вводу
loginInput.addEventListener('input', handleInputChange);
password.onChange = handleInputChange;

// Обробка події відправки форми
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (checkLoginAndPassword()) {
        alert('Успішно ввійшли!');
    } else {
        alert('Будь ласка, заповніть логін та пароль!');
    }
});

// Ініціалізуємо стан кнопки входу
submitButton.disabled = true;
