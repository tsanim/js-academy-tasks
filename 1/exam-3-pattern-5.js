function printPatternFive(length) {
  const mainPillar = Array.from({ length }, (_, index) => index + 1);

  for (let row = 0; row < length; row++) {
    let rowArray = [];

    rowArray.push(mainPillar[row]);
    for (let index = 0; index < row; index++) {
      rowArray = [...rowArray, rowArray[index] + length - index - 1];
    }

    console.log(rowArray.join(' '));
  }
}

printPatternFive(6);
