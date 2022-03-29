function flattenObject(obj, ...fields) {
  return Object.entries(obj).reduce((flattenedObject, [key, value]) => {
    if (isObject(value)) {
      return {
        ...flattenedObject,
        ...flattenObject(value, ...fields, key),
      };
    }

    flattenedObject[`${fields.join('_')}_${key}`] = value;
    return flattenedObject;
  }, {});
}

function isObject(value) {
  return value && typeof value === 'object';
}

function flattenData(dataArray) {
  return dataArray.reduce((flattenedData, item) => {
    if (isObject(item)) {
      const flattenedItem = Object.entries(item).reduce(
        (flattenedObject, [field, value]) => {
          if (isObject(value)) {
            return { ...flattenedObject, ...flattenObject(value, field) };
          }

          return { ...flattenedObject, [field]: value };
        },
        {}
      );

      return [...flattenedData, flattenedItem];
    }

    return [...flattenedData, item];
  }, []);
}

console.log(
  flattenData([
    {
      person: {
        firstName: 'John',
        lastName: 'Doe',
        role: { admin: 'Admin', kash: { a: 'b' } },
      },
      permissions: ['read', 'write', 'special', ['tiger', 'woods']],
      age: 42,
      competencies: [
        { skill: 'JavaScript', level: 'junior' },
        { skill: 'css', level: 'junior' },
      ],
    },
    'sunny day',
    5,
  ])
);
