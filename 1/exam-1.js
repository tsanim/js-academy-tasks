function getOddNumbersCountInArray(array) {
  return array.reduce((count, currentItem) => {
    if (currentItem % 2 !== 0) {
      count++;
    }

    return count;
  }, 0);
}
