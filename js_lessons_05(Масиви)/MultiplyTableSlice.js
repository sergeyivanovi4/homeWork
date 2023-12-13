// Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів

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




//АБО
let newArr = arr2.map(subarray => subarray.slice().filter(element => element !== 0));

console.log(newArr);