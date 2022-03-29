function appender(arrayOne, arrayTwo) {
  return arrayOne.reduce((mergedArray, currentItem, index) => {
    if (index % 2 === 0) {
      mergedArray[index] = [
        ...currentItem,
        ...arrayTwo
          .filter(Array.isArray)
          .reduce((splitItems, item) => [...splitItems, ...item], []),
      ];
    } else {
      mergedArray[index] = [
        ...currentItem,
        ...arrayTwo
          .filter(
            (item) => item && !Array.isArray(item) && typeof item === 'object'
          )
          .reduce((splitItems, item) => [...splitItems, item], []),
      ];
    }

    return mergedArray;
  }, []);
}

const arr1 = [
  [1, 2, 3, 4],
  ['one', 'two'],
  [5, 6],
];

const arr2 = [
  null,
  () => {
    console.log('Hello,  world!');
  },
  ['one', 'five'],
  { role: 'admin' },
  { name: 'John' },
  [1000, 1001],
];

console.log(appender(arr1, arr2));
