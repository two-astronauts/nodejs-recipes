module.exports = {
    // HOST: process.env.PG_HOST,
    // USER: process.env.PG_USER,
    // PASSWORD: process.env.PG_PASSWORD,
    // DB: process.env.PG_DATABASE,
    DATABASE_URL: process.env.DATABASE_URL,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
