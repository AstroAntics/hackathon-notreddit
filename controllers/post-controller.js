import sql from "./db";

async function createNewPost() {
  // create post sql goes here...
}

async function getAllPosts(limit) {
  await sql`select * from post limit ${limit}`;
}

async function getPostById(id) {
  await sql`select from post where post_id = ${id}`;
}

// we need a function for each of the possible updates a user can do

async function deletePostById(id) {
  await sql`delete from post where post_id = ${id}`;
}

module.exports = {createNewPost, getAllPosts, getPostById, deletePostById};