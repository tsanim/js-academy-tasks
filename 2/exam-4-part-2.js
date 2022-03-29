function getDivisibleNumbers(arr, divisible) {
  return arr.reduce((numbers, item) => {
    return item % divisible === 0 ? [...numbers, item] : numbers;
  }, []);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;

console.log(getDivisibleNumbers(arr1, divisible));
