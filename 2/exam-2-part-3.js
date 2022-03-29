function isTheObjectWithin(data, obj) {
  return data.some((item) => {
    if (isObject(item)) {
      const objectKeys = Object.keys(obj);

      return objectKeys.every((itemKey) => {
        if (isObject(obj[itemKey])) {
          return compareObjects(obj[itemKey], item[itemKey]);
        }

        return obj[itemKey] === item[itemKey];
      });
    }

    return;
  });
}

function isObject(value) {
  return value && typeof value === 'object';
}

function compareObjects(firstObject, secondObject) {
  const firstObjectKeys = Object.keys(firstObject);

  return firstObjectKeys.every((key) => {
    if (isObject(firstObject[key])) {
      return compareObjects(firstObject[key], secondObject[key]);
    }

    return firstObject[key] === secondObject[key];
  });
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  role: {
    type: 'Admin',
    id: 2,
    nsh: '',
  },
};

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
      {
        firstName: 'John',
        lastName: 'Doe',
        role: { type: 'Admin', id: 2, nsh: '' },
      },
    ],
    person
  )
);
