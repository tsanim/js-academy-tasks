class Patterns {
  #length;

  #printArrayRowWithEmptyStringFill(length, emptyStringFillCount) {
    return console.log(
      ' '.repeat(emptyStringFillCount),
      this.#getArrayFromLength(length).join(' ')
    );
  }

  #printArrayRow(length) {
    return console.log(this.#getArrayFromLength(length).join(' '));
  }

  #getArrayFromLength(length) {
    return Array.from({ length }, (_, index) => index + 1);
  }

  constructor(length) {
    this.#length = length;
  }

  patternOne() {
    for (let row = 1; row <= this.#length; row++) {
      this.#printArrayRow(row);
    }
  }

  patternTwo() {
    for (let row = 1; row <= this.#length; row++) {
      this.#printArrayRow(row);
    }

    for (let row = this.#length - 1; row >= 1; row--) {
      this.#printArrayRow(row);
    }
  }

  patternThree() {
    for (let row = 1; row <= this.#length; row++) {
      const arrayRow = [
        ...this.#getArrayFromLength(row),
        ...this.#getArrayFromLength(row - 1).reverse(),
      ];

      console.log(arrayRow.join(' '));
    }
  }

  patternFour() {
    for (let row = 1; row <= this.#length; row++) {
      this.#printArrayRowWithEmptyStringFill(row, this.#length - row);
    }

    for (let row = this.#length - 1; row >= 1; row--) {
      this.#printArrayRowWithEmptyStringFill(row, this.#length - row);
    }
  }

  static petternFive(length) {
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

  static petternSix(length) {
    const items = this.#getArrayFromLength(length);
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

  static petternSeven(length) {
    // get pillar rows from the length
    const rows = Math.sqrt(length);

    // if rows is not square root of the length return error message
    if (!Number.isInteger(rows)) {
      console.log('Invalid lengths.');
      return;
    }

    const firstPillars = getPillars(0, rows);
    let previousPillars = firstPillars;
    // exclude the first
    let pillarLength = rows - 2;
    let allPillars = [firstPillars];
    let isEndOfTheSpiral = false;

    // get all pillars from the spiral
    while (!isEndOfTheSpiral) {
      const pillars = getPillars(
        previousPillars[previousPillars.length - 1],
        pillarLength
      );

      allPillars.push(pillars);
      previousPillars = pillars;
      // reduce pillarLength for the next
      pillarLength -= 2;

      if (pillars[pillars.length - 1] === length) {
        isEndOfTheSpiral = true;
      }
    }

    for (let row = 0; row < rows / 2; row++) {
      const topPillar = getTopPillar(allPillars[row]);
      const leftPillarsItems = [];
      const rightPillarsItems = [];

      // get all left and right pillars for the current row
      for (let index = 0; index < row; index++) {
        const rightPillar = getRightPillar(allPillars[index]);
        const lastPillar = getLastPillar(allPillars[index]).reverse();
        const pillarItemIndex = row - index - 1;

        leftPillarsItems.push(lastPillar[pillarItemIndex]);
        rightPillarsItems.push(rightPillar[pillarItemIndex]);
      }

      // print top part
      console.log(
        [
          ...leftPillarsItems,
          ...topPillar,
          ...rightPillarsItems.reverse(),
        ].join(row === 0 ? '  ' : ' ')
      );
    }

    for (let row = rows / 2; row > 0; row--) {
      const bottomPillar = getBottomPillar(allPillars[row - 1]);
      const leftPillarsItems = [];
      const rightPillarsItems = [];

      for (let index = 0; index < row - 1; index++) {
        const rightPillar = getRightPillar(allPillars[index]);
        const lastPillar = getLastPillar(allPillars[index]);

        leftPillarsItems.push(lastPillar[row - index - 1]);
        rightPillarsItems.push(rightPillar.reverse()[row - index - 1]);
      }

      // print bottom part
      console.log(
        [
          ...leftPillarsItems,
          ...bottomPillar.reverse(),
          ...rightPillarsItems.reverse(),
        ].join(' ')
      );
    }
  }
}

module.exports = Patterns;

/**
 * ************************************************ HELPER FUNCTIONS PATTERN 7 ***********************************************
 */

/**
 *
 * @param {number} start
 * @param {number} pillarLength
 * @returns Pillars should be four and should be four items less from all as they are reducing on every pillar
 * pillarLength = 10 -> pillars = 36 and etc.
 */
function getPillars(start, pillarLength) {
  return Array.from(
    { length: pillarLength * 4 - 4 },
    (_, index) => start + index + 1
  );
}

/**
 *
 * @param {number[]} pillars
 * @returns Should return first pillar items according to their one pillar length.
 * pillars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] -> topPillar = [1, 2, 3, 4];
 */
function getTopPillar(pillars) {
  return pillars.slice(0, pillars.length / 4 + 1);
}

/**
 *
 * @param {number[]} pillars
 * @returns Should return bottom pillar items according to their one pillar length.
 * pillars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] -> bottomPillar = [7, 8, 9, 10];
 */
function getBottomPillar(pillars) {
  const pillarLength = pillars.length / 4;
  return pillars.slice(pillarLength * 2, pillarLength * 3 + 1);
}

/**
 *
 * @param {number[]} pillars
 * @returns Should return bottom pillar items according to their one pillar length.
 * pillars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] -> bottomPillar = [9, 10, 11,12];
 */
function getLastPillar(pillars) {
  const pillarLength = pillars.length / 4;

  return pillars.slice(pillarLength * 3);
}

/**
 *
 * @param {number[]} pillars
 * @returns Should return bottom pillar items according to their one pillar length.
 * pillars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12] -> bottomPillar = [4, 5, 6];
 */
function getRightPillar(pillars) {
  const pillarLength = pillars.length / 4;

  return pillars.slice(pillarLength + 1, pillarLength * 2 + 1);
}
