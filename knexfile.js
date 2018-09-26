// Update with your config settings.
require('dotenv').config();
const localPg = {
 host: 'localhost',
 database: 'database',
 user:'steve',
 password: 'steve'
};
const dbConnection = process.env.DATABASE_URL || localPg; 
 

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.sqlite3'
    },
    useNullAsDefault: true, 
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: './database/seeds'
  }
};
