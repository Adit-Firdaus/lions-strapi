module.exports = ({ env }) => ({
  connection: {
    client: env("DB_CLIENT", "sqlite"),
    connection: {
      host: env("DB_HOST", "127.0.0.1"),
      port: env.int("DB_PORT", 5432),
      database: env("DB_DATABASE", "strapi"),
      user: env("DB_USER", "strapi"),
      password: env("DB_PASSWORD", "password"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: { min: 0 },
  },
});
