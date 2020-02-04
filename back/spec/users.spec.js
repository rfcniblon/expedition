require('dotenv').config();
const request = require("request");

describe(
  "test users entity",
  () => {

    const users = {
      name: "paulpollle",
      password: "876543"

    };

    beforeAll(
      (done) => {

        const server = require("../server.js");
        done();
      }
    )

    // on teste la création d'un compte user
    // it(
    //   "should create a new user",
    //   (done) => {
    //     request.post(
    //       process.env.SERVER_ADDRESS + '/users',
    //       {
    //         json: true,
    //         body: users
    //       },
    //       (error, response, body) => {
    //         expect(body.id).toBeGreaterThan(0);
    //         expect(body.name).toBe(users.name);
    //         expect(body.password).toBe(users.password);
    //         users.id = body.id;
    //         done();
    //       }
    //     )
    //   }
    // );

    // on teste la MAJ d'un compte user
    // it("put users", done => {
    //   users.name = "alexandre";
    //   users.password = "4543";
    //   request(
    //     {
    //       method: "put",
    //       json: true,
    //       url: process.env.SERVER_ADDRESS + '/users/' + users.id,
    //       body: users
    //     },
    //     (error, response, body) => {
    //       expect(response.statusCode).toBe(200);
    //       data = body;
    //       expect(data.name).toBe(users.name);
    //       expect(data.password).toBe(users.password);
    //       done();
    //     }
    //   );
    // });

    // // on teste la lecture d'un compte user
    // it("should get the users", done => {
    //   request.get(
    //     process.env.SERVER_ADDRESS + '/users/' + users.id,
    //     (error, response, body) => {
    //       data.body = JSON.parse(body);
    //       expect(data.body.length).toBe(1);

    //       done();
    //     }
    //   );
    // });

    // // on teste la suppression d'un user
    // it("delete users", done => {
    //   request(
    //     {
    //       method: "DELETE",
    //       json: true,
    //       url: process.env.SERVER_ADDRESS + '/users/' + users.id,
    //     },
    //     (error, response, body) => {
    //       expect(response.statusCode).toBe(200);
    //       done();
    //     }
    //   );
    // });

  }
)
