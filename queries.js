/* <https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/> */
const { Pool } = require("pg");
const pool = new Pool({
  // ! DEVELOPMENT PURPOSES ONLY. PULL KEYS FROM AN ENV FILE FOR PRODUCTION!!!
  user: "postgres",
  host: "localhost",
  database: "notreddit",
  password: "root",
  port: 5432,
});

if (pool) {
  console.log("DB running!");
}

// USER QUERIES
const createUser = (req, res) => {
  // <https://gist.github.com/jczaplew/f055788bf851d0840f50>
  // TODO move this to a function
  const time = new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','');
  const { user_id, username, password } = req.body;
  /* this is disgusting
  const lastId = pool.query("SELECT user_id from public.\"user\" ORDER BY user_id DESC LIMIT 1", (err, result) => {
    return result;
  });*/
  pool.query(
    "INSERT INTO public.\"user\" (user_id, username, password, avatar_url, bio, is_mod, is_deleted, created_at, updated_at)" +
    "VALUES ($1, $2, $3, null, null, false, false, $4, $5) RETURNING *", [user_id, username, password, time, time], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.status(201).json(result.rows);
      }
    });
};

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
    'SELECT * FROM public."user" WHERE user_id = $1', [id],
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
    'DELETE FROM public."user" WHERE user_id = $1 RETURNING *',
    [id],
    (err, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

// POST QUERIES
const createPost = (req, res) => {
  const time = new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','');
  const {post_id, creator, title, content, is_deleted, is_locked} = req.body;
  pool.query("INSERT INTO post (post_id, creator, title, content, is_deleted, is_locked, created_at, updated_at)" + 
  "VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
  [post_id, creator, title, content, is_deleted, is_locked, time, time], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(201).json(result.rows);
    }
  });
};

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
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
  getAllDms,
  getDmById,
  deleteDm,
};
