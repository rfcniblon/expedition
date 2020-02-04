require('dotenv').config();
const request = require("request");

  describe(
      "test contact", 
      () => {
          beforeAll( 
              ( done ) => {
                  const server = require("../server.js");
                  done();
              }
          );

      //    on test si l'url / retourne Ok ?
          it( 
              "should return contact ?", 
              () => {
                  request.post(
                      process.env.SERVER_ADDRESS + '/contact',
                      (error, response, body) => {
                          expect(response.statusCode).toBe(200);
                          
                      }
                  )
              }
          );
      }
  )
