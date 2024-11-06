// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest");
const { db } = require('./db/connection');
const { Musician } = require('./models/index');
const app = require('./src/app');
const { seedMusician } = require("./seedData");

describe('./musicians endpoint', () => {
    test("Testing musicians endpoint", async () => {
        // Sends request to `/musicians` endpoint
        const response = await request(app).get("/musicians");
        // Check if the status code is 200
        expect(response.statusCode).toBe(200);
        // Parse the response text to JSON
        const responseData = JSON.parse(response.text);

        // Tests
        expect(responseData).toBeInstanceOf(Array);
        expect(responseData.length).toBeGreaterThan(0);
        expect(responseData[0]).toHaveProperty("name");
        expect(responseData[0]).toHaveProperty("instrument");
    });
});

describe("./musicians/:id", () => {
    test("Fetching a musician by ID", async () => {
        // Assumes there is a musician with ID of 1 in seeded data
        const response = await request(app).get("/musicians/1");
        // Checks if the status code is 200
        expect(response.statusCode).toBe(200);
        // Parses the text to JSON
        const musicianData = JSON.parse(response.text);

        // Tests
        expect(musicianData).toHaveProperty("name");
        expect(musicianData).toHaveProperty("instrument");
    });

    test("Fetching a musician that does not exist", async () => {
        // Assumes ID of 999 does not exist
        const response = await request(app).get("/musicians/999");
        expect(response.statusCode).toBe(404);
    });
});

/*
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest");
const app = require('./src/app');

describe('./musicians endpoint', () => {
    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
        expect(responseData).toBeInstanceOf(Array);
        expect(responseData.length).toBeGreaterThan(0);
        expect(responseData[0]).toHaveProperty("name");
        expect(responseData[0]).toHaveProperty("instrument");
    });
});

describe("./musicians/:id", () => {
    test("Fetching a musician by ID", async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const musicianData = JSON.parse(response.text);
        expect(musicianData).toHaveProperty("name");
        expect(musicianData).toHaveProperty("instrument");
    });

    test("Fetching a musician that does not exist", async () => {
        const response = await request(app).get("/musicians/999");
        expect(response.statusCode).toBe(404);
    });
});

// New tests for POST, PUT, and DELETE
describe("./musicians CRUD operations", () => {
    test("Creating a new musician", async () => {
        const newMusician = {
            name: "Freddie Mercury",
            instrument: "Voice"
        };
        const response = await request(app).post("/musicians").send(newMusician);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("name", "Freddie Mercury");
        expect(response.body).toHaveProperty("instrument", "Voice");
    });

    test("Updating an existing musician", async () => {
        const updatedMusician = {
            name: "Freddie Mercury",
            instrument: "Piano"
        };
        const response = await request(app).put("/musicians/1").send(updatedMusician);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("instrument", "Piano");
    });

    test("Deleting a musician", async () => {
        const response = await request(app).delete("/musicians/1");
        expect(response.statusCode).toBe(204);
    });

    test("Deleting a musician that does not exist", async () => {
        const response = await request(app).delete("/musicians/999"); // Assuming 999 does not exist
        expect(response.statusCode).toBe(404);
    });
});
*/

//-----------

/*
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest");
const { db } = require('./db/connection');
const { Musician } = require('./models/index');
const app = require('./src/app');

describe('./musicians endpoint', () => {
    test("Testing musicians endpoint", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
        expect(responseData).toBeInstanceOf(Array);
        expect(responseData.length).toBeGreaterThan(0);
        expect(responseData[0]).toHaveProperty("name");
        expect(responseData[0]).toHaveProperty("instrument");
    });
});

describe("./musicians/:id", () => {
    test("Fetching a musician by ID", async () => {
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const musicianData = JSON.parse(response.text);
        expect(musicianData).toHaveProperty("name");
        expect(musicianData).toHaveProperty("instrument");
    });

    test("Fetching a musician that does not exist", async () => {
        const response = await request(app).get("/musicians/999");
        expect(response.statusCode).toBe(404);
    });
});

// New tests for POST, PUT, and DELETE
describe("./musicians CRUD operations", () => {
    test("Creating a new musician", async () => {
        const newMusician = {
            name: "Freddie Mercury",
            instrument: "Voice"
        };
        const response = await request(app).post("/musicians").send(newMusician);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("name", "Freddie Mercury");
        expect(response.body).toHaveProperty("instrument", "Voice");
    });

    test("Updating an existing musician", async () => {
        const updatedMusician = {
            name: "Freddie Mercury",
            instrument: "Piano"
        };
        const response = await request(app).put("/musicians/1").send(updatedMusician);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("instrument", "Piano");
    });

    test("Deleting a musician", async () => {
        const response = await request(app).delete("/musicians/1");
        expect(response.statusCode).toBe(204);
    });

    test("Deleting a musician that does not exist", async () => {
        const response = await request(app).delete("/musicians/999"); // Assuming 999 does not exist
        expect(response.statusCode).toBe(404);
    });
});
*/