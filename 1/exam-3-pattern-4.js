const printArrayRowWithStringFill = (length, stringFillCount) => {
  console.log(
    ' '.repeat(stringFillCount),
    Array.from({ length }, (_, index) => index + 1).join(' ')
  );
};

function printPatternFour(length) {
  for (let row = 1; row <= length; row++) {
    printArrayRowWithStringFill(row, length - row);
  }

  for (let row = length - 1; row >= 1; row--) {
    printArrayRowWithStringFill(row, length - row);
  }
}

printPatternFour(5);
