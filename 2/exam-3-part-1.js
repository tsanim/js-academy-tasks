function mergeTruthyItems(arrOne, arrTwo) {
  return arrOne.reduce((mergedItems, currentItem, index) => {
    if (index === 0 && !arrTwo[index]) {
        return [currentItem]
    }

    if (arrTwo[index]) {
      return [...mergedItems, currentItem, arrTwo[index]];
    }

    return [...mergedItems, currentItem];
  }, []);
}

const arr1 = [1, undefined, [1, 2, 3], 'test', { name: 'John Doe' }];

const arr2 = [
  null,
  () => {
    console.log('Hello,  world!');
  },
  ['one', 'five'],
  undefined,
  6,
];

console.log(mergeTruthyItems(arr1, arr2));
