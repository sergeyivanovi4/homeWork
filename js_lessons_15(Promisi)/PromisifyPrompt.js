// Аналогічно до попереднього завдання промісифікуйте prompt. У разі натискання "ОК"
//  проміс резолвиться та його результатом стає текст, введений користувачем у вікні 'prompt'.
//   У разі натискання "Скасування" - проміс реджектиться. Параметром функції буде текст повідомлення в prompt
// function promptPromise(text){
//      ......
// }
// promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
//                                        () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))


function promptPromise(text) {
    return new Promise((resolve, reject) => {
        const result = prompt(text);
        if (result !== null) {
            resolve(result);
        } else {
            reject();
        }
    });
}

promptPromise("Як тебе звуть?").then(
    name => console.log(`Тебе звуть ${name}`),
    () => console.log('Ну навіщо морозитися, нормально ж спілкувалися')
);
