const config = {
    development: {
        PORT: process.env.PORT || 3005,
        user: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'postgres',
        host: process.env.PGHOST || 'localhost',
        database: process.env.PGDATABASE || 'trabalhador',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
    },
    production: {
        PORT: process.env.PORT || 3005,
        user: process.env.PGUSER || 'postgres',
        password: process.env.PGPASSWORD || 'postgres',
        host: process.env.PGHOST || 'localhost',
        database: process.env.PGDATABASE || 'trabalhador',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
    },
    test: {
        PORT: process.env.PORT || 3005,
        user: process.env.PG_USER || 'postgres',
        password: process.env.PG_PASSWORD || 'postgres',
        host: process.env.PG_HOST || 'localhost',
        database: process.env.DB_NAME || 'trabalhador_test',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 10000
    }
};

module.exports = config;
