// За аналогією, переробіть код завдання Password у синтаксис класів ES6. 
// Сховайте все що можна в #приватні властивості об'єктів класу.
//  Перевірте на формі логіна - адже вона використовує Password


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

///////////////////////////////////////
///////////////////////////////////////


class Password {
    #input;
    #toggleButton;
    #open;

    constructor(parent, open) {
        this.#open = open;
        this.#input = document.createElement('input');
        this.#input.type = open ? 'text' : 'password';
        parent.appendChild(this.#input);

        this.#toggleButton = document.createElement('button');
        this.#toggleButton.textContent = open ? 'Hide' : 'Show';
        parent.appendChild(this.#toggleButton);

        this.#input.addEventListener('input', () => {
            if (this.onChange) {
                this.onChange(this.#input.value);
            }
        });

        this.#toggleButton.addEventListener('click', () => {
            this.#open = !this.#open;
            this.#input.type = this.#open ? 'text' : 'password';
            this.#toggleButton.textContent = this.#open ? 'Hide' : 'Show';
            if (this.onOpenChange) {
                this.onOpenChange(this.#open);
            }
        });
    }

    setValue(value) {
        this.#input.value = value;
    }

    getValue() {
        return this.#input.value;
    }

    setOpen(value) {
        this.#open = value;
        this.#input.type = this.#open ? 'text' : 'password';
        this.#toggleButton.textContent = this.#open ? 'Hide' : 'Show';
    }

    getOpen() {
        return this.#open;
    }
}

// Приклад використання
let p = new Password(document.body, true);

p.onChange = data => console.log(data);
p.onOpenChange = open => console.log(open);

p.setValue('qwerty');
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());
