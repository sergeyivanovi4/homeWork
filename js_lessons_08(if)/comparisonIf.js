// Розберіть приклад
var age = + prompt ("Скільки вам років?", "");
if (age < 18) {
    alert("школяр");
}
else if (age > 18 && age < 30){
    alert("молодь");
}
else if (age > 30 && age < 45){
    alert("зрілість");
}
else if (age > 45 && age < 60){
    alert("захід сонця");
}
else if (age > 60) {
    alert("як пенсія?");
}
else {
    alert("чи кіборг, чи KERNESS");
}
// Додайте умову негативного віку на приклад вище. 
// Розставте недостатні (але синтаксично необов'язкові) фігурні дужки. Викиньте зайве з поточного коду

var age = + prompt ("Скільки вам років?", "");
if (age < 0) {
    alert("щє не народився?");
} else {
    if (age < 18) {
        alert("школяр");
    } else {
        if (age > 18 && age < 30){
            alert("молодь");
        } else {
            if (age > 30 && age < 45){
                alert("зрілість");
            } else {
                if (age > 45 && age < 60){
                    alert("захід сонця");
                } else {
                    if (age > 60) {
                        alert("як пенсія?");
                    }  else {
                        alert("чи кіборг, чи KERNESS");
                    }
                }
            }
        }
    }
}

// АБО
// АБО 
// АБО

var age = +prompt("Скільки вам років?", "");

if (age < 0) 
    alert("щє не народився?");
else if (age < 18) 
    alert("школяр");
else if (age > 18 && age < 30)
    alert("молодь");
else if (age > 30 && age < 45)
    alert("зрілість");
else if (age > 45 && age < 60)
    alert("захід сонця");
// else if (age >= 60) 
else if (age > 60 && age < 90)
    alert("як пенсія?");
else 
    alert("чи кіборг, чи KERNESS");

 
 
 
 
