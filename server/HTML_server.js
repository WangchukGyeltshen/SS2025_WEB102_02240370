const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>HTML Server</title>
        </head>
        <body>
            <h1>Hello, world!</h1>
            <p>This is a simple HTML response.</p>
        </body>
        </html>
    `);
});

const PORT = 4000; // Defining the port number
server.listen(PORT, () => { // Starting the server
    console.log(`Server is running at http://localhost:${PORT}`);
});
