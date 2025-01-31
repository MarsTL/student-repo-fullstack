const http = require("http");
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); // response headers
    res.write("<h1>Node Routing Exercise</h1>"); // write response
    res.write("<ul>");
    res.write('<li><a href="/welcome">Welcome</a></li>');
    res.write('<li><a href="/redirect">Redirect</a></li>');
    res.write('<li><a href="/cache">Cache</a></li>');
    res.write('<li><a href="/cookie">Cookie</a></li>');
    res.write('<li><a href="/other">404 Test</a></li>');
    res.write("</ul>");
    res.end();
  } else if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to the Node.js Server!</h1>");
    res.write('<a href="/">Back to Home</a>'); 
    res.end();
  } else if (req.url === "/redirect") {
    res.writeHead(302, { Location: "/redirected" });
    res.end();
  } else if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>You have been redirected!</h1>");
    res.write('<a href="/">Back to Home</a>');
    res.end();
  } else if (req.url === "/cache") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Cache-Control": "max-age=86400", // 1 day
    });
    res.write("<h1>This resource was cached.</h1>");
    res.write('<a href="/">Back to Home</a>');
    res.end();
  } else if (req.url === "/cookie") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Set-Cookie": "hello=world",
    });
    res.write("Cookies... yummm");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
    res.write('<a href="/">Back to Home</a>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
