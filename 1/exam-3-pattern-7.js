function printPatternSeven(length) {
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
      [...leftPillarsItems, ...topPillar, ...rightPillarsItems.reverse()].join(
        row === 0 ? '  ' : ' '
      )
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

/**
 * ************************************************ HELPER FUNCTIONS ***********************************************
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

printPatternSeven(1024);
