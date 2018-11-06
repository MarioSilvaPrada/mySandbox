let width = parseInt(prompt('Christmas Tree width')) / 2 + 1;

let treeRow = '';

for (i = 1; i <= width; i++) {

  for (j = i; j <= width; j++) {
    treeRow += " ";
  }
  for (j = 1; j <= (2 * i - 1); j++) {
    treeRow += '*';
  }
  treeRow += '\n';
}

var node = document.createElement("pre");
var textnode = document.createTextNode(treeRow);
node.appendChild(textnode);
document.querySelector("body").appendChild(node);