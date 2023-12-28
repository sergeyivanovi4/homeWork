// Перепишіть приклад нижче, використовуючи if.

// let color = prompt("Введіть колір","");
// switch (color) {
//      case "red": document.write("<div style='background-color: red;'>червоний</div>");
//      case "black": document.write("<div style='background-color: black; color: white;'>чорний</div>");
//                  break;
//      case "blue": document.write("<div style='background-color: blue;'>синій</div>");
//      case "green": document.write("<div style='background-color: green;'>зелений</div>");
//                  break;
//      default: document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }


let color = prompt("Введіть колір","");
if (color === "red") {
    document.write(
        "<div style='background-color: red;'>червоний</div>", 
        "<div style='background-color: black; color: white;'>чорний</div>"
        );
} 
else if (color === "black") {
    document.write("<div style='background-color: black; color: white;'>чорний</div>");
} 
else if (color === "blue") {
    document.write(
        "<div style='background-color: blue;'>синій</div>",
        "<div style='background-color: green;'>зелений</div>"
        );
} 
else if (color === "green") {
    document.write("<div style='background-color: green;'>зелений</div>");
} 
else {
    document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}
