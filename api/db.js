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

const Device = sequelize.define('device', {
    name: Sequelize.STRING,
    manufacturer: Sequelize.STRING,
    model: Sequelize.STRING,
    length: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    primaryColor: Sequelize.STRING,
    secondaryColor: Sequelize.STRING,
    characteristics: Sequelize.STRING,
    serial: Sequelize.INTEGER
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
    // Create Bank information
    async createBank() {
        const bank = await Bank.create({
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        });
        return bank;
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
            await bank.update(info);
            return true;
        } else {
            return false;
        }
    },
    // Delete Bank information
    async deleteBank() {
        const bank = await Bank.findOne();
        await bank.destroy();
    },

    // Create Device information
    async createDevice(entry) {
        const device = await Device.create({
            name: entry.name,
            manufacturer: entry.manufacturer,
            model: entry.model,
            length: entry.length,
            primaryColor: entry.primaryColor,
            secondaryColor: entry.secondaryColor,
            characteristics: entry.characteristics,
            serial: entry.serial
        });
        return device;
    },
    // Get saved Device information
    async getDevice(id) {
        const devices = await Device.findAll();
        if (devices) {
            return devices;
        } else {
            return -1;
        }
    },
    // Update Device information
    async updateDevice(entry) {
        const device = await Device.findOne({ where: { id: id } });
        if (device) {
            await device.update(entry);
            return true;
        } else {
            return false;
        }
    },
    // Delete Device information
    async deleteDevice() {
        const device = await Device.findOne({ where: { id: id } });
        await device.destroy();
    },
};
