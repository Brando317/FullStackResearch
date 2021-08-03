import mysql from "mysql";
import config from "../../config";

const Connection = mysql.createPool(config.mysql);

const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default Query;
