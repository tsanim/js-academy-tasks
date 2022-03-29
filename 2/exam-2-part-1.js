function isTheObjectWithin(data, obj) {
  return data.some((item) => item === obj);
}

const person = { name: 'John Doe' };

console.log(
  isTheObjectWithin(
    [
      6,
      'Test',
      'value',
      1,
      undefined,
      null,
      () => {
        console.log('Hello,  world!');
      },
      { count: 5 },
      { name: 'John Doe' },
    ],
    person
  )
);
