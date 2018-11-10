let width = parseInt(prompt('width input'));

let middle = (width + 1) / 2;

let row = '';

for (let i = 0; i < middle; i++) {
  for (let j = 1; j <= width; j++) {
    if (j >= (middle - i) && j <= (middle + i)) {
      row += "*";
    } else {
      row += " ";
    }
  }

  alert(row);
  row = '';
}