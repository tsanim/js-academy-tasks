const getArrayFromLength = (length) => {
  return Array.from({ length }, (_, index) => index + 1);
};

function printPatternThree(length) {
  for (let row = 1; row <= length; row++) {
    const arrayRow = [
      ...getArrayFromLength(row),
      ...getArrayFromLength(row - 1).reverse(),
    ];

    console.log(arrayRow.join(' '));
  }
}

printPatternThree(5);
