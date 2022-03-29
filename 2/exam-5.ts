type FlattenObject = Record<string, any>;
type FlattenData = (FlattenObject | string | number)[]

function flattenData(dataArray: any[]): FlattenData[] {
    return dataArray.reduce((flattenedData: FlattenData, item: any) => {
        if (isObject(item)) {
            const flattenedItem = Object.entries(item).reduce(
                (flattenedObject, [field, value]) => {
                    if (isObject(value)) {
                        return { ...flattenedObject, ...flattenObject(value, field) };
                    }

                    if (Array.isArray(value)) {
                        return { ...flattenedObject, [field]: flattenObject(value, field) };

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

function flattenObject(obj: FlattenObject, ...fields: string[]) {
    return Object.entries(obj).reduce((flattenedObject: FlattenObject, [key, value]: [string, FlattenData]) => {
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
