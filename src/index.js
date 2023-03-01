var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const responseObject = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    res.end(JSON.stringify(responseObject));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}

httpServer.listen(8081, () => {
  console.log("listening to the port 8081");
});

module.exports = httpServer;
