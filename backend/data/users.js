import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@localhost",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "john@localhost",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
  {
    name: "Jane",
    email: "jane@localhost",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];

export default users;
