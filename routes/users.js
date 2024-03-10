import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// My Mock Database
let users = [
  {
    first_name: "Emmanuel",
    last_name: "Inua",
    email: "ijr@gmail.com",
  },
  {
    first_name: "Ruby",
    last_name: "Inua",
    email: "rs@gmail.com",
  },
];

// Getting the List of Users from the Mock DB
router.get("/", (req, res) => {
  res.send(users);
});

// Lets add users to the Mock DB
// Lets add users to the Mock DB
router.post("/", (req, res) => {
  const user = req.body;

  console.log("Received data:", user); // Log received data

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.first_name} added to the database!`);
});

// Lets find specific Users in the Mock DB
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// Lets delete Users in the Mock DB
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  const { first_name } = users.find((user) => user.id === id);

  res.send(`${id} deleted successfully from database`);
});

// Lets update Users in the Mock DB
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);
  if (first_name) {
    user.first_name = first_name;
  }
  if (last_name) {
    user.last_name = last_name;
  }
  if (email) {
    user.email = email;
  }

  res.send(`User with thr ${id} has been updated`);
});

export default router;
