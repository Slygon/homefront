var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/goldenbell';

module.exports = connectionString;