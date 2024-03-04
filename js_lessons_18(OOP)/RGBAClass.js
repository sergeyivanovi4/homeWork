// Створіть клас-спадкоємець класу RGB під назвою RGBA.
//  У ньому має додатись нове приватне поле #a, що містить значення прозорості в діапазоні від 0 до 1.
//   Створіть сеттер та геттер a. Перекрийте сеттер і геттер hex, 
//   щоб у класі-спадкоємці працював синтаксис #RRGGBBAA. Врахуйте, 
//   що сетер та геттер предка можуть вам допомогти. Також, сеттер hex має підтримувати синтаксис #RRGGBB 
//   без прозорості. Додайте сеттер і геттер rgba, які працюють із CSS-синтаксисом виду rgba(128,255,64, 0.5). Додати сеттер color, в який можна надавати будь-який із синтаксисів CSS - #RRGGBB, #RRGGBBAA, rgb(1,2,3) і rgba(1,2,3,0.5).
//  Сеттер a повинен перевіряти діапазон та викидати виняток у разі невідповідності діапазону.

class RGBA extends RGB {
    #a;

    constructor(r, g, b, a) {
        super(r, g, b);
        this.#a = a;
    }

    get a() {
        return this.#a;
    }

    set a(value) {
        if (typeof value !== 'number' || value < 0 || value > 1) {
            throw new RangeError('Value must be a number in the range of 0 to 1.');
        }
        this.#a = value;
    }

    get hex() {
        const hexA = Math.round(this.#a * 255).toString(16).padStart(2, '0');
        return super.hex + hexA;
    }

    set hex(value) {
        if (value.length === 7) {
            super.hex = value;
            this.#a = 1;
        } else if (value.length === 9) {
            super.hex = value.slice(0, 7);
            this.#a = parseInt(value.slice(7), 16) / 255;
        } else {
            throw new SyntaxError('Invalid HEX syntax.');
        }
    }

    get rgba() {
        return `rgba(${this.r},${this.g},${this.b},${this.#a})`;
    }

    set rgba(value) {
        const match = value.match(/^(rgba)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])\W+([01]?\d\d?|2[0-4]\d|25[0-5])\W+([01]?\d\d?|2[0-4]\d|25[0-5])\W+([01]?(\.\d+)?|2(\.0)?)\)$/);
        if (!match) {
            throw new SyntaxError('Invalid RGBA syntax.');
        }
        super.rgb = `rgb(${match[2]},${match[3]},${match[4]})`;
        this.#a = parseFloat(match[5]);
    }

    set color(value) {
        if (value.startsWith('#')) {
            this.hex = value;
        } else if (value.startsWith('rgb(')) {
            this.rgb = value;
        } else if (value.startsWith('rgba(')) {
            this.rgba = value;
        } else {
            throw new SyntaxError('Invalid color syntax.');
        }
    }
}

// Код для перевірки

const rgba = new RGBA
rgba.hex = '#80808080'
console.log(rgba.a) //0.5
console.log(rgba.rgba) //rgba(128,128,128,0.5)
rgba.r = 192
rgba.a = 0.25
console.log(rgba.hex)  //#C0808040

rgba.color = 'rgba(1,2,3,0.70)'
rgba.b    *= 10
console.log(rgba.hex)  //#01021EB3