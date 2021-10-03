const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = async () => {
    await sequelize.sync({force: true});
    await seedUsers();
    await seedPosts();
    await seedComments();

    process.exit(0);
};

seedAll();


