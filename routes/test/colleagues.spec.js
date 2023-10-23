/*
const test = require("../../../src/lib/test");
const request = require("supertest");
const app = require("../../../src/app");
const { equal, ok } = require("assert");
const database = require("../../../src/database");

describe("Colleague service", () => {
  before(async () => database.init());
  beforeEach(async () => test.reset());

  it("creates a colleague", async () => {
    const colleague = {
      name: "Test Colleague",
      email: "test@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };

    const { body: res1 } = await request(app)
      .post("/api/colleagues")
      .send(colleague)
      .expect(201);

    ok(res1.id > 0);
    equal(res1.name, colleague.name);
    equal(res1.email, colleague.email);
    equal(res1.phone, colleague.phone);

    const { body: res2 } = await request(app).get(`/api/colleagues/${res1.id}`);

    equal(res2.name, colleague.name);
    equal(res2.email, colleague.email);
  });

  it("lists colleagues", async () => {
    const colleague = {
      name: "Test Colleague",
      email: "test@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };
    const colleague2 = {
      name: "Test2 Colleague",
      email: "test2@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };

    await request(app).post("/api/colleagues").send(colleague);
    await request(app).post("/api/colleagues").send(colleague2);

    const { body: res } = await request(app).get("/api/colleagues").expect(200);

    equal(res.length, 31);
    equal(res[29].name, colleague.name);
    equal(res[30].name, colleague2.name);
  });

  it("retrieves colleague by id", async () => {
    const colleague = {
      name: "Test Colleague",
      email: "test@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };

    const {
      body: { id },
    } = await request(app).post("/api/colleagues").send(colleague);

    const { body: res2 } = await request(app)
      .get(`/api/colleagues/${id}`)
      .expect(200);

    equal(res2.name, colleague.name);
    equal(res2.email, colleague.email);
  });

  it("updates colleague", async () => {
    const colleague = {
      name: "Test Colleague",
      email: "test@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };

    const {
      body: { id },
    } = await request(app).post("/api/colleagues").send(colleague);

    await request(app)
      .put(`/api/colleagues/${id}`)
      .send({
        name: "Updated Colleague",
        email: "updated.test@example.com",
        phone: "987-654-3210",
        teamId: 2,
      })
      .expect(200);

    const { body: res2 } = await request(app).get(`/api/colleagues/${id}`);
    equal(res2.name, "Updated Colleague");
    equal(res2.email, "updated.test@example.com");
  });

  it("deletes colleague", async () => {
    const colleague = {
      name: "Test Colleague",
      email: "test@example.com",
      phone: "123-456-7890",
      teamId: 1,
    };

    const {
      body: { id },
    } = await request(app).post("/api/colleagues").send(colleague);

    await request(app).delete(`/api/colleagues/${id}`).expect(204);
    await request(app).get(`/api/colleagues/${id}`).expect(404);
  });
});

*/
