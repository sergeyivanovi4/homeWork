
// Напишіть функцію, яка приймає два параметри: батьківський DOM-елемент та об'єкт-результат роботи createPersonClosure (або createPersonClosureDestruct, результати в обох цих функцій однакові) і малює форму, яка дозволяє редагувати дані про персону.
// На початку роботи personForm створює 5 полів введення (ім'я, прізвище, по батькові, вік, ПІБ) у батьківському DOM-елементі та встановлює туди значення, прочитані за допомогою getName , getSurname і т.д.
// Події oninput в будь-якому з полів введення потрібно запускати відповідний set..... Наприклад, при зміні поля введення імені повинен запускатися setName(якийсь инпут.value). Функції set... повертають значення, і його потрібно занести назад до input. Таким чином, у полях введення неможливо буде ввести некоректні значення (наприклад вік не зможе вийти за межі 0-100 років)

const b = createPersonClosure("Ганна", "Іванова")
b.setAge(15)
b.setFullName("Петрова Ганна Миколаївна")

function personForm(parent, person){
    //настворювати інпутів (5 штук)
    //додавати їх у parent
    //Навісити кожному з них обробник події типу nameInput.oninput = () => {
        //Тут намагаємося міняти person використовуючи person.setName. Текст в інпуті має стати таким, що поверне setName
    //}
    let name;
    let surname;
    let age;
    let fatherName;
    var body = document.body;

        // Створення input
        const nameInput = document.createElement('input');
        const surnameInput = document.createElement('input');
        const fatherNameInput = document.createElement('input');
        const ageInput = document.createElement('input');
        const fullNameInput = document.createElement('input');

    // Задання атрибутів для input (наприклад, типу та ін.)
    nameInput.setAttribute('type', 'text');
    // nameInput.setAttribute('placeholder', 'Введіть текст');
    nameInput.value = person.getName();

    surnameInput.setAttribute('type', 'text');
    // surnameInput.setAttribute('placeholder', 'Введіть текст');
    surnameInput.value = person.getSurname();

    fatherNameInput.setAttribute('type', 'text');
    // fatherNameInput.setAttribute('placeholder', 'Введіть текст');
    fatherNameInput.value = person.getFatherName();

    ageInput.setAttribute('type', 'number');
    ageInput.setAttribute('min', '0');
    ageInput.setAttribute('max', '100');
    ageInput.value = person.getAge();

    fullNameInput.setAttribute('type', 'text');
    fullNameInput.value = person.getFullName();

        // Додавання інпутів у батьківський елемент
        parent.appendChild(nameInput);
        parent.appendChild(surnameInput);
        parent.appendChild(fatherNameInput);
        parent.appendChild(ageInput);
        parent.appendChild(fullNameInput);

     // Навішуємо обробники подій
    nameInput.oninput = () => {
        const newName = person.setName(nameInput.value);
        nameInput.value = newName;
    };

    surnameInput.oninput = () => {
        const newSurname = person.setSurname(surnameInput.value);
        surnameInput.value = newSurname;
    };

    fatherNameInput.oninput = () => {
        const newFatherName = person.setFatherName(fatherNameInput.value);
        fatherNameInput.value = newFatherName;
    };

    ageInput.oninput = () => {
        const newAge = person.setAge(parseInt(ageInput.value, 10));
        ageInput.value = newAge;
    };

    fullNameInput.oninput = () => {
        const newFullName = person.setFullName(fullNameInput.value);
        fullNameInput.value = newFullName;
    };
}










// 
// 
function createPersonClosure(name, surname) {
    let age;
    let fatherName;

    return {
        getName() {
            return name;
        },
        getSurname() {
            return surname;
        },
        getFatherName() {
            return fatherName;
        },
        getAge: () => age,
        getFullName: () => `${name} ${fatherName || ''} ${surname}`.trim(),


        setName: (newName) => {
            if (typeof newName === 'string' && /^[A-Z][a-z]*$/.test(newName)) {
              name = newName;
            }
            return name;
        },
          setSurname: (newSurname) => {
            if (typeof newSurname === 'string' && /^[A-Z][a-z]*$/.test(newSurname)) {
              surname = newSurname;
            }
            return surname;
        }, 
          setFatherName: (newFatherName) => {
            if (typeof newFatherName === 'string' && /^[A-Z][a-z]*$/.test(newFatherName)) {
              fatherName = newFatherName;
            }
            return fatherName;
        },
        setAge: (newAge) => {
            if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
              age = newAge;
            }
            return age;
        },
        setFullName(newFullName) {
            return `${name} ${fatherName || ''} ${surname}`.trim();
        }
    }
} 
