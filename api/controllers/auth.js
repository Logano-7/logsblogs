import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Account already exists!");

    // Hide password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create User
    const query =
      "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(query, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(201).json("Account created!");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(401).json("Account not found!");

    // Check password
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordValid)
      return res.status(400).json("Incorrect username or password!");

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_KEY);

    const { password, ...other } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);

  });
};
export const logout = (req, res) => {};
