// Напишіть клас RGB, приватними властивостями якого є три числа #r, #g, #b. 
// Клас повинен мати наступнi гетери та сетери:
// r. Служить для читання/зміни #r
// g. Служить для читання/зміни #g
// b. Служить для читання/зміни #b
// rgb. Для читання/зміни всіх трьох колірних каналів. Використовується рядковий CSS синтаксис типу rgb(128,255,64)
// hex. Для читання/зміни всіх трьох колірних каналів. Використовується рядковий CSS синтаксис типу #RRGGBB
// Для перевірки рядків у сеттерах rgb та hex використовуйте такі регулярні вирази:
// hex: /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/. Цей регулярний вираз при використанні методу match дасть вам всі три колірні канали окремо в окремих осередках результуючого масиву:
// console.log('#FFAA08'.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa- f]{2})$/))
// rgb: візьміть звідси
// У разі, якщо match повертає null, викидайте виняток SyntaxError. Також, у сеттерах r, g, b, перевіряйте тип і діапазон (він має бути від 0 до 255) і викидайте виняток RangeError.
// Код для перевірки
// const rgb = new RGB
// rgb.r = 15
// rgb.g = 128
// rgb.b = 192
// console.log(rgb.hex) //#0F80C0
// console.log(rgb.rgb) //rgb(15,128,192)
// rgb.hex = '#2030FF'
// console.log(rgb.rgb) //rgb(32, 48, 255)
// rgb.rgb = 'rgb(100, 90, 50)'
// console.log(rgb.r, rgb.g, rgb.b) //100, 90, 50

// rgb.hex = 'діч' //SyntaxError
// rgb.r   = 1000   //RangeError


class RGB {
    #r;
    #g;
    #b;

    constructor(r, g, b) {
        this.#r = r;
        this.#g = g;
        this.#b = b;
    }

    get r() {
        return this.#r;
    }

    set r(value) {
        if (typeof value !== 'number' || value < 0 || value > 255) {
            throw new RangeError('Value must be a number in the range of 0 to 255.');
        }
        this.#r = value;
    }

    get g() {
        return this.#g;
    }

    set g(value) {
        if (typeof value !== 'number' || value < 0 || value > 255) {
            throw new RangeError('Value must be a number in the range of 0 to 255.');
        }
        this.#g = value;
    }

    get b() {
        return this.#b;
    }

    set b(value) {
        if (typeof value !== 'number' || value < 0 || value > 255) {
            throw new RangeError('Value must be a number in the range of 0 to 255.');
        }
        this.#b = value;
    }

    get rgb() {
        return `rgb(${this.#r},${this.#g},${this.#b})`;
    }

    set rgb(value) {
        const match = value.match(/^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/);
        if (!match) {
            throw new SyntaxError('Invalid RGB syntax.');
        }
        this.#r = parseInt(match[2]);
        this.#g = parseInt(match[4]);
        this.#b = parseInt(match[6]);
    }

    get hex() {
        const hexR = this.#r.toString(16).padStart(2, '0');
        const hexG = this.#g.toString(16).padStart(2, '0');
        const hexB = this.#b.toString(16).padStart(2, '0');
        return `#${hexR}${hexG}${hexB}`;
    }

    set hex(value) {
        const match = value.match(/^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        if (!match) {
            throw new SyntaxError('Invalid HEX syntax.');
        }
        this.#r = parseInt(match[1], 16);
        this.#g = parseInt(match[2], 16);
        this.#b = parseInt(match[3], 16);
    }
}

// Приклад використання
const rgb = new RGB
rgb.r = 15
rgb.g = 128
rgb.b = 192
console.log(rgb.hex) //#0F80C0
console.log(rgb.rgb) //rgb(15,128,192)
rgb.hex = '#2030FF'
console.log(rgb.rgb) //rgb(32, 48, 255)
rgb.rgb = 'rgb(100, 90, 50)'
console.log(rgb.r, rgb.g, rgb.b) //100, 90, 50

rgb.hex = 'діч' //SyntaxError
rgb.r   = 1000   //RangeError
