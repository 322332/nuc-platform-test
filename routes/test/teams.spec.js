/*const test = require("../../../src/lib/test");
const request = require("supertest");
const app = require("../../../src/app");
const { equal, ok } = require("assert");
const database = require("../../../src/database");

describe("Team service", () => {
  before(async () => database.init());
  beforeEach(async () => test.reset());

  it("creates a team", async () => {
    const team = { name: "Test Team", icon: "icon", src: "src" };

    const { body: res1 } = await request(app)
      .post("/api/teams")
      .send(team)
      .expect(201);

    ok(res1.id > 0);
    equal(res1.name, team.name);

    const { body: res2 } = await request(app).get(`/api/teams/${res1.id}`);

    equal(res2.name, team.name);
  });

  it("lists teams", async () => {
    const team = { name: "Test Team", icon: "icon", src: "src" };

    await request(app).post("/api/teams").send(team);
    await request(app).post("/api/teams").send(team);

    const { body: res } = await request(app).get("/api/teams").expect(200);

    equal(res.length, 5);

    equal(res[3].name, team.name);
    equal(res[4].name, team.name);
  });

  it("retrieves team by id", async () => {
    const team = { name: "Test Team", icon: "icon", src: "src" };

    const {
      body: { id },
    } = await request(app).post("/api/teams").send(team);

    const { body: res2 } = await request(app)
      .get(`/api/teams/${id}`)
      .expect(200);

    equal(res2.name, team.name);
  });

  it("updates team", async () => {
    const team = { name: "Test Team", icon: "icon", src: "src" };

    const {
      body: { id },
    } = await request(app).post("/api/teams").send(team);

    await request(app)
      .put(`/api/teams/${id}`)
      .send({ name: "Updated Test Team", icon: "icon", src: "src" })
      .expect(200);

    const { body: res2 } = await request(app).get(`/api/teams/${id}`);
    equal(res2.name, "Updated Test Team");
  });

  it("deletes team", async () => {
    const team = { name: "Test Team", icon: "icon", src: "src" };

    const {
      body: { id },
    } = await request(app).post("/api/teams").send(team);

    await request(app).delete(`/api/teams/${id}`).expect(204);
    await request(app).get(`/api/teams/${id}`).expect(404);
  });
});

*/
