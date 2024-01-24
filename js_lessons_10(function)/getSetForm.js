// getSetForm
// Зробіть функцію, яка вирішує попереднє завдання універсально, тобто для будь-якого об'єкта, в якому є набір функцій get... та set.... Кода стане менше, гнучкості більше, адже в попередньому завданні багато копіпасти (x5)
// Будь-який об'єкт можна перебрати
// Будь-який об'єкт можна перебрати, використовуючи for....in або for.... of Object.entries(person). Таким чином ви дізнаєтеся набір всіх функцій get.... та set.....
// Що потрібно робити, ітеруючи об'єкт
// Створювати поля введення
// Налаштовувати їх
// Зберігати поля введення до загального реєстру
// Реєстр
// // Перед ітерацією створіть спільний реєстр полів у формі об'єкта. Для персони це буде щось на зразок
// {
//      Name: якийсь інпут в DOM,
//      Surname: якийсь інпут в DOM,
//      FatherName: якийсь інпут в DOM,
//      Age: якийсь інпут в DOM,
//      FullName: якийсь інпут в DOM,
// }
// Спочатку це об'єкт порожній, оскільки він заповнюється імперативно під час виконання ітерацій
// Ітерація
// На кожній ітерації:
// Визначити ім'я поля, тобто відкусити get або set від імені ключа в об'єкті (зробити з getAge або setAge окремо змінні c get або set, окремо змінну з Age)
// якщо ключа в реєстрі ще немає, створити інпут і додати його до реєстру використовуючи ім'я поля як ключ.
// якщо в об'єкті немає set, зробити input.disabled=true
// задати інпуту тип, згідно з типом даних, доступним через get
// задати інпуту placeholder, згідно з назвою поля
// встановити інпуту значення, використовуючи get (не обов'язково, можна після циклу запустити функція, яка оновлює значення всіх полів)
// задати інпуту обробник події, який запускатиме set
// результат set повинен потрапляти у значення input (для того, щоб у полі введення були тільки коректні дані)
// запустити функцію, яка оновлює значення всіх полів через get. Стане в нагоді, коли ви поредагуєте ПІБ, і треба буде синхронізувати поля Прізвища, Ім'я та По-батькові
// Функція оновлення:
// перебирає реєстр
// з ключа робить ім'я методу getШОТОТОТАМ
// перевіряє, що ключ є у вихідному об'єкті
// запускає функцію у вихідному об'єкті за наявності
// Добуте значення заносить в value інпуту з реєстру.
// Цю функцію треба запускати при будь-якій зміні інпуту, щоб пов'язані поля введення синхронізувалися. Наприклад, при редагуванні загального ПІБ змінювалися поля ім'я-прізвище-по-батькові, і навпаки.
// function getSetForm(parent, getSet){
//     const inputs = {} //реєстр
    
//     const updateInputs = () => { //функція оновлення полів введення відповідно до будь-яких get....
//         //тут має бути перебір
//     }
    
//     for (const getSetName in getSet){
//         const getOrSet = //перші три літери змінної getSetName. Також можна використовувати прапор isGet, який дорівнюватиме true або false
//         const fieldName = // Інші літери getSetName - типу "Name" або "FullName"
//         const setKey    = `set` + fieldName
//         const getKey    = `get` + fieldName
        
//         //допишіть тут все, що треба, і не тільки тут
//     }
//     updateInputs()
// }

// getSetForm(document.body, car)
// getSetForm(document.body, createPersonClosure('Анон', "Анонов"))


function getSetForm(parent, getSet) {
    const inputs = {}; // Реєстр полів введення
  
    const updateInputs = () => {
      for (const key in inputs) {
        const getOrSet = key.slice(0, 3); // Отримати перші три літери ключа
        const fieldName = key.slice(3); // Отримати інші літери ключа
  
        // Оновити значення полів введення відповідно до функції get
        inputs[key].value = getSet[`${getOrSet}${fieldName}`]();
      }
    };
  
    for (const key in getSet) {
      if (key.startsWith('get')) {
        const fieldName = key.slice(3);
        const setKey = `set${fieldName}`;
        const getKey = `get${fieldName}`;
  
        // Створити поле введення та додати його до реєстру
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = fieldName;
        input.addEventListener('input', () => {
          // Оновити значення за допомогою функції set
          getSet[setKey](input.value);
          // Після оновлення полів введення, запустити функцію оновлення
          updateInputs();
        });
  
        // Додати поле введення до батьківського елемента
        parent.appendChild(input);
        // Додати поле введення до реєстру
        inputs[getKey] = input;
      }
    }
  
    // Після створення всіх полів введення, запустити функцію оновлення
    updateInputs();
  }
let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}

getSetForm(document.body, car)
