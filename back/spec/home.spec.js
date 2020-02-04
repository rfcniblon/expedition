const request = require("request");

describe(
    "init server",
    () => {

        let server = null;
        let data = {};

        beforeAll(
            (done) => {
                server = require("../server");
                request.get("http://localhost:3001/", (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
                });
            }
        );

        afterAll(
            () => {
                server.close();
            }
        );


        it("Status 200", () => {
            expect(data.status).toBe(200);
        });

        it("Body", () => {
            expect(data.body).toBe("hello world");
        });


    }
)