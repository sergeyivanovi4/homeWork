// Напишете функцію jwtDecode, яка приймає єдиний параметр token і повертає інформацію з переданого JWT токена.
// Алгоритм розкодування:
// Розбити токен на три частини. Розділювач - . (крапка)
// Виділити середню частину.
// Використовуючи функцію atob розкодувати середню частину з кодування Base64, отримавши JSON
// Розкодувати JSON
// Повернути розкодовані дані з JSON
// Врахуйте, що як токен може бути передана якась дичина. У такому разі розкодування не вийде, і функція:
// Не повинна сипати червоними матюками (помилками) у консоль
// Повинна просто повернути undefined
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
console.log(jwtDecode(token)) 
//{
//  "sub": {
//    "id": "632205aeb74e1f5f2ec1a320",
//    "login": "test457",
//    "acl": [
//      "632205aeb74e1f5f2ec1a320",
//      "user"
//    ]
//  },
//  "iat": 1668272163
//}

try {
    console.log(jwtDecode())         //undefined
    console.log(jwtDecode("дічь"))   //undefined
    console.log(jwtDecode("ey.ey.ey"))   //undefined
    
    console.log('до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором')
}
finally{
    console.log('ДЗ, мабуть, закінчено')
}

// 
// 

function jwtDecode(token) {
    try {
        if (!token || typeof token !== 'string') {
            return undefined;
        }

        const parts = token.split('.');
        if (parts.length !== 3) {
            return undefined;
        }

        const decoded = atob(parts[1]);
        const payload = JSON.parse(decoded);

        return payload;
    } catch (error) {
        return undefined;
    }
}

// АБО

function jwtDecode(token) {
    try {
        return JSON.parse(atob (token.split(".")[1]))
    } catch(error) {
        return undefined
    }
}
