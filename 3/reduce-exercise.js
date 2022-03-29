const people = [
  {
    firstName: 'Tsani',
    lastName: 'Mazalov',
    roles: ['admin', 'user'],
    isIntern: false,
  },
  {
    firstName: 'Ahmed',
    lastName: 'Kardashev',
    roles: ['admin'],
    isIntern: true,
  },
  {
    firstName: 'Martina',
    lastName: 'Ilieva',
    roles: ['user'],
    isIntern: true,
  },
  {
    firstName: 'Mariya',
    lastName: 'Andonova',
    roles: ['admin', 'user'],
    isIntern: false,
  },
];

const data = people.reduce(
  (accumulatedData, currentPerson) => {
    const { roles } = currentPerson;

    if (roles.includes('admin')) {
      accumulatedData.admins.push(currentPerson);
    }

    if (roles.includes('user')) {
      accumulatedData.ordinaryUsers.push(currentPerson);
    }

    if (currentPerson.isIntern) {
      accumulatedData.interns.push(currentPerson);
    }

    return accumulatedData;
  },
  {
    interns: [],
    admins: [],
    ordinaryUsers: [],
  }
);

console.log(data);
