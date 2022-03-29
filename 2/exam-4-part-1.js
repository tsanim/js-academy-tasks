function getSumOfHigherThan(arr, higherThan) {
  return arr.reduce((sum, item) => {
    return item > higherThan ? (sum += item) : sum;
  }, 0);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;

console.log(getSumOfHigherThan(arr1, higherThan));
