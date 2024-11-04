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
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        // Sends request to `/musicians` endpoint
        const response = await request(app).get("/musicians");
        
        // Check if the status code is 200
        expect(response.statusCode).toBe(200);
        
        // Parse the response text to JSON
        const responseData = JSON.parse(response.text);
        
        // Write expect tests here
        expect(responseData).toBeInstanceOf(Array);
        expect(responseData.length).toBeGreaterThan(0);
        expect(responseData[0]).toHaveProperty("name");
        expect(responseData[0]).toHaveProperty("instrument");
    });
});
