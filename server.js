const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = faker.fake("{{address.streetAddress}} {{address.streetName}} {{address.streetSuffix}}, {{address.city}} {{address.stateAbbr}}, {{address.zipCode}}, {{address.country}}");
    }
}

app.get('/api/users/new', (req,res) => {
    res.json({
        User: new User
    });
})

app.get('/api/companies/new', (req,res) => {
    res.json({
        Company: new Company
    });
})

app.get('/api/user/company', (req,res) => {
    res.json({
        User: new User,
        Company: new Company
    })
})

const server = app.listen(8000, () =>
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
