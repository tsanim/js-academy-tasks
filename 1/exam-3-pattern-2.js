const printArrayRow = (length) => {
  return console.log(Array.from({ length }, (_, index) => index + 1).join(' '));
};

function printPatternTwo(length) {
  for (let row = 1; row <= length; row++) {
    printArrayRow(row);
  }

  for (let row = length - 1; row >= 1; row--) {
    printArrayRow(row);
  }
}

printPatternTwo(5);
