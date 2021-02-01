const { Sequelize } = require('sequelize');

// Pass a connection URI
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/pc') // Example for postgres

// Model definitions
const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: Sequelize.STRING,
    googleID: Sequelize.STRING,
});

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
    serial: Sequelize.STRING
});

const Game = sequelize.define('game', {
    name: Sequelize.STRING,
    platform: Sequelize.STRING,
    genre: Sequelize.STRING,
    format: Sequelize.STRING,
    status: Sequelize.STRING,
    notes: Sequelize.STRING,
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

    // Get saved User information
    async getUser(id) {
        const user = await User.findOrCreate({ where: { id: id } });
        if (user) {
            return user;
        } else {
            return -1;
        }
    },
    // Get saved Google User information
    async getGoogleUser(profile) {
        const user = await User.findOrCreate({ where: { googleID: profile.id, name: profile.name.givenName } });
        if (user) {
            return user;
        } else {
            return -1;
        }
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
        if (bank)
            return bank;
        else
            return -1;

    },
    // Update Bank information
    async updateBank(info) {
        const bank = await Bank.findOne();
        if (bank) {
            await bank.update(info);
            return bank;
        } else
            return -1;
    },
    // Delete Bank information
    async deleteBank() {
        const bank = await Bank.findOne();
        if (bank) {
            await bank.destroy();
            return 0;
        }
        else
            return -1;
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
    // Get all saved Device information
    async getAllDevices() {
        const devices = await Device.findAll();
        if (devices) {
            return devices.sort((a, b) => {
                if (a.getDataValue("name") > b.getDataValue("name"))
                    return 1;
                else if (a.getDataValue("name") < b.getDataValue("name"))
                    return -1;
                else
                    return 0;
            });
        } else {
            return -1;
        }
    },
    // Get saved Device information
    async getDevice(id) {
        const device = await Device.findOne({ where: { id: id } });
        if (device) {
            return device;
        } else {
            return -1;
        }
    },
    // Update Device information
    async updateDevice(entry, id) {
        const device = await Device.findOne({ where: { id: id } });
        if (device) {
            await device.update(entry);
            return device;
        } else {
            return -1;
        }
    },
    // Delete Device information
    async deleteDevice(id) {
        const device = await Device.findOne({ where: { id: id } });
        if (device) {
            await device.destroy();
            return id;
        }
        else
            return -1;
    },

    // Create Game information
    async createGame(entry) {
        const game = await Game.create({
            name: entry.name,
            platform: entry.platform,
            genre: entry.genre,
            format: entry.format,
            status: entry.status,
            notes: entry.notes
        });
        return game;
    },
    // Get all saved Game information
    async getAllGames() {
        const games = await Game.findAll();
        if (games) {
            return games.sort((a, b) => {
                if (a.getDataValue("name") > b.getDataValue("name"))
                    return 1;
                else if (a.getDataValue("name") < b.getDataValue("name"))
                    return -1;
                else
                    return 0;
            });
        } else {
            return -1;
        }
    },
    // Get saved Game information
    async getGame(id) {
        const game = await Game.findOne({ where: { id: id } });
        if (game) {
            return game;
        } else {
            return -1;
        }
    },
    // Update Game information
    async updateGame(entry, id) {
        const game = await Game.findOne({ where: { id: id } });
        if (game) {
            await game.update(entry);
            return game;
        } else {
            return -1;
        }
    },
    // Delete Game information
    async deleteGame(id) {
        const game = await Game.findOne({ where: { id: id } });
        if (game) {
            await game.destroy();
            return id;
        }
        else
            return -1;
    },
};
