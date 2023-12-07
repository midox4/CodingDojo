const { faker } = require('@faker-js/faker');

const express = require("express");

const app = express();
const port = 5000;

const generateUserObj = () => ({ // arrow function to gnerate user object
  _id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
  email: faker.internet.email(),
  passsword: faker.internet.password(),
});

const generateCompanyObject = () => ({  // arrow function generate company obj
  _id: faker.string.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    country: faker.location.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  const newUser = generateUserObj();
  res.json(newUser);
  console.log(newUser)
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = generateCompanyObject();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = generateUserObj();
  const newCompany = generateCompanyObject();
  const Obj = {
    user: newUser,
    company: newCompany,
  };
  res.json(Obj);
});

app.listen(port, () => console.log(`express server running on port ${port}`))