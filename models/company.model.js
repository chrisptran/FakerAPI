const { faker } = require('@faker-js/faker');

const createCompany = () => {
    const newCompany = {
        name: faker.company.name(),
        _id: faker.string.uuid(),
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country()
        
    };
    return newCompany;
};

module.exports = {createCompany}