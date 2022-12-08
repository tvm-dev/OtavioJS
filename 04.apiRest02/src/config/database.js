require('dotenv').config()

module.exports = {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    host: process.env.DATABASE_PORT,
    host: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE,

    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createAt: 'created_at',
        updatedAt: 'updated_at',
    },
    dialectOptions: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
}
