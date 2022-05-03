function getOddNumbersCountInArray(array: number[]): number {
  return array.reduce<number>((count: number, currentItem: number): number => {
    if (currentItem % 2 !== 0) {
      count++;
    }

    return count;
  }, 0);
}
