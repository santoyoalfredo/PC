const { Sequelize } = require('sequelize');

// Pass a connection URI
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/pc') // Example for postgres

// Model definitions
const Bank = sequelize.define('bank', {
    quarters: Sequelize.INTEGER,
    dimes: Sequelize.INTEGER,
    nickels: Sequelize.INTEGER,
    pennies: Sequelize.INTEGER,
}, {
    freezeTableName: true,
});

module.exports = {

    // Test database connection
    async testDB() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    // Set up database with initial tables
    async setUpDB() {
        await sequelize.sync();
    },
    // Get saved channel ID
    async getBank() {
        const bank = await Bank.findOne();
        if (bank) {
            return bank.getDataValue('quarters');
        } else {
            return -1;
        }
    },
};