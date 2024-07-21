const request = require("supertest");
const { app } = require("../index");

describe("video streaming microservice", () => {

    test("microservice can handle requests", async () => {

        const response = await request(app).get("/live"); // Makes a request to the "/live" route.
        expect(response.status).toBe(200); // Verify that a HTTP status code 200 is returned, indicating success.
    });

    test("microservice can handle another request", async () => {

        const response = await request(app).get("/video"); // Makes a request to the "/live" route.
        expect(response.status).toBe(200); // Verify that a HTTP status code 200 is returned, indicating success.
    });
});