const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    res.writeHead(200, { "Content-Type": "text/HTML" });
    res.end(JSON.stringify({message: "Hello, world!"}));
});

const PORT = 4000; //defining the port number
server.listen(PORT, () => { //starting the server
    console.log(`Server is running at http://localhost:${PORT}`);
});
// report not needed
