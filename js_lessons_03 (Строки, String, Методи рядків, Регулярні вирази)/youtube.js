// Нехай користувач введе будь-який текст із посиланням на youtube. 
// Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і 
// створіть рядок із вбудованим блоком HTML. 
// Додайте блок на сторінку. 

// оголосіть константу з регулярним виразом
// використовуйте метод match, який поверне вам масив
// вийміть із масиву елемент із ідентифікатором відео
// вивчіть HTML код вбудовування відео на сторінку на youtube.
// використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
// використовуючи document.write відправте отриманий рядок на сторінку.

function youtube() {
    const userLink = prompt('Вставте посилання на Ютуб');
    const youtbRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const youtbIndentificator = userLink.match(youtbRegex);

    console.log(youtbIndentificator);

    document.write (`
    <div class="video">
    <iframe  src="https://www.youtube.com/embed/${youtbIndentificator[1]}"
        width="560" height="315"
        frameborder="0" allowfullscreen>
    </iframe>
    </div>
    `)

}
youtube();