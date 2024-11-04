const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

// Create a GET /musicians route to return all musicians
app.get("/musicians", async (req, res) => {
  try {
    const musicians = await Musician.findAll();
    res.json(musicians);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching musicians" });
  }
});

module.exports = app;
