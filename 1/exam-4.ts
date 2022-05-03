interface CountsData {
  nullCount: number;
  objectsCount: number;
  stringsCount: number;
  numericsCount: number;
  arraysCount: number;
  undefinedCount: number;
  datesCount: number;
  booleansCount: number;
  functions: number;
}

function isDate(value: any): value is Date {
  return !isNaN(value) && value instanceof Date;
}

function getCountOfTypes(array: unknown[]): CountsData {
  return array.reduce<CountsData>(
    (data: CountsData, item: unknown) => {
      if (item === null) {
        data.nullCount += 1;
      }

      const typeOfItem = typeof item;

      if (typeOfItem === 'object') {
        data.objectsCount += 1;
      }

      if (typeOfItem === 'string') {
        data.stringsCount += 1;
      }

      if (typeOfItem === 'number') {
        data.numericsCount += 1;
      }

      if (Array.isArray(item)) {
        data.arraysCount += 1;
      }

      if (typeOfItem === 'undefined') {
        data.undefinedCount += 1;
      }

      if (isDate(item)) {
        data.datesCount += 1;
      }

      if (typeOfItem === 'boolean') {
        data.booleansCount += 1;
      }

      if (typeOfItem === 'function') {
        data.functions += 1;
      }

      return data;
    },
    {
      nullCount: 0,
      objectsCount: 0,
      stringsCount: 0,
      numericsCount: 0,
      arraysCount: 0,
      undefinedCount: 0,
      datesCount: 0,
      booleansCount: 0,
      functions: 0,
    }
  );
}

console.log(
  getCountOfTypes([
    new Date(),
    [],
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
  ])
);
