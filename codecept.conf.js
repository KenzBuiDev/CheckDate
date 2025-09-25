/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: './test/API/*-api.js',
    output: './output',
    helpers: {
        REST: {
            endpoint: 'http://localhost:3001',
            onRequest: (request) => {
                request.headers = {
                    'Content-Type': 'application/json'
                };
            }
        },
        JSONResponse: {}
    },
    include: {
        I: './steps_file.js'
    },
    name: 'date-checker-api'
}