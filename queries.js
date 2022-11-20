/* <https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/> */

const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notreddit",
  password: "root",
  port: 5432,
});

// USER QUERIES
const getAllUsers = (req, res) => {
  pool.query(
    'SELECT * FROM public."user" ORDER BY user_id ASC',
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  // in postgres the $ is the variable param and the [] are the optional params supplied
  pool.query(
    'SELECT * FROM public."user" WHERE user_id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    'DELETE FROM public."user" WHERE user_id = $1',
    [id],
    (err, results) => {
      if (error) {
        throw error;
      } else {
        response.status(200).json({ message: "ok" });
      }
    }
  );
};

// POST QUERIES
const getAllPosts = (req, res) => {
  pool.query(
    "SELECT * FROM public.post ORDER BY post_id ASC",
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM public.post WHERE post_id = $1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "DELETE FROM public.post WHERE post_id = $1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

const getAllDms = (req, res) => {
  pool.query("SELECT * FROM public.dm", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const getDmById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT FROM public.dm WHERE dm_id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const deleteDm = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM public.dm WHERE dm_id = $1", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result.rows);
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  getAllPosts,
  getPostById,
  deletePost,
  getAllDms,
  getDmById,
  deleteDm,
};
