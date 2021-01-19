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
        await Bank.findOrCreate(
            {
                where: {
                },
                defaults: {
                    quarters: 0,
                    dimes: 0,
                    nickels: 0,
                    pennies: 0
                }
            },
        );
    },
    // Get saved Bank information
    async getBank() {
        const bank = await Bank.findOne();
        if (bank) {
            return bank;
        } else {
            return -1;
        }
    },
    // Update Bank information
    async updateBank(info) {
        const bank = await Bank.findOne();
        if (bank) {
            bank.update(info);
            // bank.setDataValue(quarters, quarters);
            // bank.setDataValue(dimes, dimes);
            // bank.setDataValue(nickels, nickels);
            // bank.setDataValue(pennies, pennies);
            // bank.save().catch(console.error);
            return true;
        } else {
            return false;
        }
    },
};
