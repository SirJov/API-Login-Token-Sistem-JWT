const express = require("express");
const router = express.Router();
const UserHandler = require("../Core/UserHandler.js");
const handler = new UserHandler();

router.post("/UserLogin", async (req, res) => {
  try {
    const login = await handler.UserLogin(req);
    return res.status(200).send(login);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.post("/RegisterUser", async (req, res) => {
  try {
    const user = await handler.registerUser(req);
    if (user) return res.status(201).send(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.delete("/deleteUser/:email", async (req, res) => {
  try {
    const user = await handler.deleteUser(req);
    if (user) return res.status(201).send(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const user = await handler.fetchUsers();
    if (user) return res.status(200).send(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

router.post("/getId", async (req, res) => {
  try {
    const user = await handler.fetchSpecificUsers(req);
    console.log(req);

    if (user) {
      return res.status(200).send(user);
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.status(404).json(JSON.stringify(error));
  }
});

module.exports = router;
