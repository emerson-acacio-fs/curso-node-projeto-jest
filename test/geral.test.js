const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

test("A aplicação deve responder na porta 31311", async () => {
  return request.get("/").then((res) => expect(res.statusCode).toEqual(200));
});

test("deve retornar vermelho como cor favorita", async () => {
  return request.get("/cor/victor").then((res) => {
    expect(res.body.cor).toEqual("vermelho");
    expect(res.statusCode).toEqual(200);
  });
});

test("deve retornar retornar pessoa inválida", async () => {
  return request.get("/cor/aaa").then((res) => {
    expect(res.text).toEqual("pessoa invália");
    expect(res.statusCode).toEqual(500);
  });
});
