import dotenv from "dotenv";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT),
};
