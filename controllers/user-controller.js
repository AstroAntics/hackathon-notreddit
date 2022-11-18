import { User } from "../models/user";

const testUserFunction = (username) => {
    let user = User.build({"username": username});
    console.log(user);
}

module.exports = {testUserFunction};