function printPatternSix(length) {
  const items = Array.from({ length }, (_, index) => index + 1);
  const sideNumbersCount = length / 4;
  const topSide = items.slice(0, sideNumbersCount + 1);
  const rightSide = items.slice(sideNumbersCount + 1, sideNumbersCount * 2);
  const bottomSide = items.slice(
    sideNumbersCount * 2,
    sideNumbersCount * 3 + 1
  );
  const leftSide = items.slice(
    sideNumbersCount * 3 + 1,
    sideNumbersCount * 4 + 1
  );

  // log top part of the square
  console.log(topSide.join('  '));

  for (let index = 0; index < sideNumbersCount - 1; index++) {
    const row = [
      leftSide.reverse()[index],
      ...Array.from({ length: sideNumbersCount - 1 }, (_) => '  '),
      rightSide[index],
    ];

    console.log(row.join(' '));
  }

  // log bottom part of the square
  console.log(bottomSide.reverse().join(' '));
}

printPatternSix(36);
printPatternSix(16);
