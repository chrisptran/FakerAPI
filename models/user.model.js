const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newUser = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.string.uuid(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};



module.exports = {
    createUser
}