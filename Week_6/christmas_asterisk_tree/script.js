
let width = parseInt(prompt('Christmas Tree width'));


for (let i = 0; i < width; i++) {

    let input = "";

    var node = document.createElement("span");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.querySelector("body").appendChild(node);

    
    for (j = i; j < width/2; j++) {
        input += " ";
    }
    for (k = 0; k < (i) - 1; k++) {
        input += "*";
    }
    console.log(input);
}