const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /musicians - Fetch all musicians
app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
});

// GET /musicians/:id - Fetch a musician by ID
app.get("/musicians/:id", async (req, res) => {
    const musician = await Musician.findByPk(req.params.id);
    if (!musician) {
      return res.status(404).json({ error: "Musician not found" });
    }
    res.json(musician);
});

// POST /musicians - Create a new musician
app.post("/musicians", async (req, res) => {
    const newMusician = await Musician.create(req.body);
    res.status(201).json(newMusician);
});

// PUT /musicians/:id - Update an existing musician
app.put("/musicians/:id", async (req, res) => {
    const updated = await Musician.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedCount === 0) {
      const updatedMusician = await Musician.findByPk(req.params.id);
      res.json(updatedMusician);
    };
});

// DELETE /musicians/:id - Delete a musician
app.delete("/musicians/:id", async (req, res) => {
    const deletedCount = await Musician.destroy({
      where: { id: req.params.id }
    });
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Musician not found" });
  };
});

module.exports = app;

/*
ALTERNATIVE DELETE
app.delete("/musicians/:id", async (req, res) => {
  try {
    const deleted = await Musician.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Musician not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the musician" });
  }
});
*/

/*

const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /musicians - Fetch all musicians
app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
});

// GET /musicians/:id - Fetch a musician by ID
app.get("/musicians/:id", async (req, res) => {
    const musician = await Musician.findByPk(req.params.id);
    if (!musician) {
        return res.status(404).json({ error: "Musician not found" });
    }
    res.json(musician);
});

// POST /musicians - Create a new musician
app.post("/musicians", async (req, res) => {
    const newMusician = await Musician.create(req.body);
    res.status(201).json(newMusician);
});

// PUT /musicians/:id - Update an existing musician
app.put("/musicians/:id", async (req, res) => {
    const [updatedCount] = await Musician.update(req.body, {
        where: { id: req.params.id }
    });
    if (updatedCount === 0) {
        return res.status(404).json({ error: "Musician not found" });
    }
    const updatedMusician = await Musician.findByPk(req.params.id);
    res.json(updatedMusician);
});

// DELETE /musicians/:id - Delete a musician
app.delete("/musicians/:id", async (req, res) => {
    const deletedCount = await Musician.destroy({
        where: { id: req.params.id }
    });
    if (deletedCount === 0) {
        return res.status(404).json({ error: "Musician not found" });
    }
    res.status(204).send(); // No content to send back
});

module.exports = app;
*/