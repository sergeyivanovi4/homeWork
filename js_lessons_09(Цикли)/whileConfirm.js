// Зробіть цикл з confirm, який триває поки користувач тисне Скасування і закінчується по ОК.

let i = 0
while (!confirm('Не набридло?')) {
     alert('Ще ітерація')
     i++
}
alert(`Вам набридло за ${i} разів.`)