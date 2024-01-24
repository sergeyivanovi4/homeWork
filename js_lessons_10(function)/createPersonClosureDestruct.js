// Зробіть набір параметрів функції попереднього завдання об'єктом, 
// використовуйте деструктуризацію для вилучення параметрів.
// Вкажіть значення за замовчуванням
const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"))
const b = createPersonClosureDestruct({name: 'Миколай', age: 75})


function createPersonClosureDestruct({
    name = '',
    surname = '',
    fatherName = '',
    age= ''
} = {}) {
    let innerName = name;
    let innerSurname = surname;
    let innerFatherName = fatherName;
    let innerAge = age;
	
  	return {
		getName: () => innerName,
		getSurname: () => innerSurname,
		getFatherName: () => innerFatherName,
		getAge: () => innerAge,
		getFullName: () => `${innerName} ${innerFatherName || ''} ${innerSurname}`.trim(),


		setName: (newName) => {
			if (typeof newName === 'string' && /^[A-Z][a-z]*$/.test(newName)) {
			innerName = newName;
			}
			return innerName;
		},
	
		setSurname: (newSurname) => {
			if (typeof newSurname === 'string' && /^[A-Z][a-z]*$/.test(newSurname)) {
				innerSurname = newSurname;
			}
			return innerSurname;
		},
	
		setFatherName: (newFatherName) => {
			if (typeof newFatherName === 'string' && /^[A-Z][a-z]*$/.test(newFatherName)) {
				innerFatherName = newFatherName;
			}
			return innerFatherName;
		},
		setAge: (newAge) => {
			if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
				innerAge = newAge;
			}
			return innerAge;
		},
		setFullName(newFullName) {
			return `${innerName} ${innerFatherName || ''} ${innerSurname}`.trim();
		}
	}
}

// щось не розумію 