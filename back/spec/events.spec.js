// require('dotenv').config();
// const request = require("request");

// describe(
//     "test partenaires entity",
//     () => {
//         const partenaires = {
//             name: "un nom qui tue",
//             description: "./images/testeur.png",
//             liens_logo: " aaaaaa ",
//             alt: "ceci est une photo",
//             liens_site: " aaaaaa ",
//         };
//         beforeAll(
//             (done) => {
//                 const server = require("../server.js");
//                 done();
//             }
//         )

//         // on teste la création d'un partenaires
//         it(
//             "should create a new partenaires",
//             (done) => {
//                 request.post(
//                     process.env.SERVER_ADDRESS + '/partenaires',
//                     {
//                         json: true,
//                         body: partenaires
//                     },
//                     (error, response, body) => {
//                         expect(body.id).toBeGreaterThan(0);
//                         expect(body.name).toBe(partenaires.name);
//                         expect(body.description).toBe(partenaires.description);
//                         expect(body.liens_logo).toBe(partenaires.liens_logo);
//                         expect(body.alt).toBe(partenaires.alt);
//                         expect(body.liens_site).toBe(partenaires.liens_site);
//                         partenaires.id = body.id;
//                         done();
//                     }
//                 )
//             }
//         );

//         // on teste la MAJ de partenaires
//         it("put partenaires", done => {
//             partenaires.name = "00000jnjknolofr0";
//             partenaires.description = "./images/";
//             partenaires.liens_logo = "brEEDEDxelles";
//             partenaires.alt="ceci est une photo";
//             partenaires.liens_site = "azerty";
//             request(
//                 {
//                     method: "put",
//                     json: true,
//                     url: process.env.SERVER_ADDRESS + '/partenaires/' + partenaires.id,
//                     body: partenaires
//                 },
//                 (error, response, body) => {
//                     expect(response.statusCode).toBe(200);
//                     data = body;
//                     expect(data.name).toBe(partenaires.name);
//                     expect(data.description).toBe(partenaires.description);
//                     expect(data.liens_logo).toBe(partenaires.liens_logo);
//                     expect(data.alt).toBe(partenaires.alt);
//                     expect(data.liens_site).toBe(partenaires.liens_site);
//                     done();
//                 }
//             );
//         });

//          // on teste la lecture de partenaires
//          it("should get the partenaires", done => {
//             request.get(
//                 process.env.SERVER_ADDRESS + '/partenaires/' + partenaires.id,
//                 (error, response, body) => {
//                     data.body = JSON.parse(body);
//                     expect(data.body.length).toBe(1);
//                     done();
//                 }
//             );
//         });

//         // on teste la suppression d'un partenaires
//         it("delete partenaires", done => {
//             request(
//                 {
//                     method: "delete",
//                     json: true,
//                     url: process.env.SERVER_ADDRESS + '/partenaires/' + partenaires.id,
//                 },
//                 (error, response, body) => {
//                     expect(response.statusCode).toBe(200);
//                      done();
//                 }
//             );
//         });
//     }
// )
