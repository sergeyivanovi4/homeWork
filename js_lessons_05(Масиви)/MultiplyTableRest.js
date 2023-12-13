// Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації.
//  Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів -
//   зберіть загальний масив без нулів


let arr = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
]
arr[2][3] === 6

let arr2 = arr.slice(1)

console.log(arr2)

let [
    [, ...restArrays],
    [, ...restArrays1],
    [, ...restArrays2],
    [, ...restArrays3]
] = arr2;

// АБО
// let [
//     [, ...restArrays, ...restArrays1, ...restArrays2, ...restArrays3],
// ] = arr2;

console.log(restArrays, restArrays1, restArrays2, restArrays3)

let arr3 = [restArrays, restArrays1, restArrays2, restArrays3]
console.log(arr3)