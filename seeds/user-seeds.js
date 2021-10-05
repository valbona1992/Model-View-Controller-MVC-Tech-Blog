const { User } = require('../models');

const userData = [
    {
      "username": "Bob",
      "email": "bob@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Jim",
      "email": "jim@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Kat",
      "email": "kat@gmail.com",
      "password": "password12345"
    }
  ]


const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;