const { User } = require("../models");

const userData = [
  {
    name: "Dorothy",
    email: "dorothy@hotmail.com",
    password: "password12345",
  },
  {
    name: "Blanche",
    email: "blanche@gmail.com",
    password: "password12345",
  },
  {
    name: "Rose",
    email: "rose@aol.com",
    password: "password12345",
  },
];
const userData = () => User.bulkCreate(userData);

module.exports = userData;
