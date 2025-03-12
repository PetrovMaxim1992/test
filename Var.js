let user = {
    age: 18,
    name: {
        lastName: 'Petrov',
        firstName: 'Max',
    }
};

console.log('Привет, я' +" "+`${user.name.firstName} ${user.name.lastName}`);

console.log(`Мне ${user.age} лет.`);
