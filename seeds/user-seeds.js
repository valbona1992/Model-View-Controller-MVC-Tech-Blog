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

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;