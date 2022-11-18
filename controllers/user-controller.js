import sql from "./db";

async function createNewUser() {
    // sql statement to create new user goes here
}

async function getAllUsers(limit) {
  await sql`select * from user limit ${limit}`;
}

async function getUserById(id) {
    await sql`select from user where user_id = ${id}`;
}

async function deleteUserById(id) {
    await sql`delete from user where user_id = ${id}`
}

module.exports = {getAllUsers, getUserById, deleteUserById, createNewUser};