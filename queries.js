/* <https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/> */

const pg = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notreddit",
  password: "root",
  port: 5432,
});

const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM user ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  // in postgres the $ is the variable param and the [] are the optional params supplied
  pool.query("SELECT * FROM user WHERE user_id = $1", [id], (err, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM user WHERE user_id = $1", [id], (err, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json({ message: "ok" });
    }
  });
};

module.exports = {getAllUsers, getUserById, deleteUser};