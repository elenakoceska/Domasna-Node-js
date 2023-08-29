//Homework
//1. /home/vangel/hristov -> res.end("Vangel Hristov") -> first letter should be capital

// const http = require("http");
// const url = require ("url");
// const name = ("elena koceska")

// const server = http.createServer(function (req, res) {
//     if(url === "/")
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(name.toUpperCase())
//     res.end();
// });

// server.listen(8080);

//-------------------------------------------------------------------------
//2. /home/books/a -> res.end("Atomic Habits") -> all books starting with "a"


// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;
//         if(req.method === "GET") {
//             res.writeHead(200, { "Content-type":"text/html"});
//             fs.createReadStream("./books.js")
//         } else if (req.method ==="POST") {
//             const books = ""
//             req.on("data", (chunk) => {
//                 books += chunk
//             })
//         }
//             // res.write("<h2>All books:</h2>"),
//             // res.write(books),
//             // res.write("<h2>Books that starts with letter 'A'</h2>");
//             // books.filter((book) => book.startsWith('a')),
//             // res.end()
        

// });

// server.listen(8080);
//----------------------------------------------------------------------------------------------------------------------ch
// const http = require('http');
// const url = require('url');
// const qs = require('querystring');

// // Sample book data
// const books = [
//   'Anna Karenina',
//   'A Game of Thrones',
//   'A Tale of Two Cities',
//   'Alice in Wonderland',
//   'The Alchemist'
// ];

// // Create the HTTP server
// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';

//     // Read the request data
//     req.on('data', (chunk) => {
//       body += chunk;
//     });

//     // Process the request data
//     req.on('end', () => {
//       const requestData = qs.parse(body);
//       const searchTerm = requestData.searchTerm || '';

//       // Filter books starting with the given letter
//       const filteredBooks = books.filter((book) => {
//         return book.toLowerCase().startsWith(searchTerm.toLowerCase());
//       });

//       // Send the filtered books as the response
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(filteredBooks));
//     });
//   } else {
//     // Handle other HTTP methods
//     res.writeHead(404);
//     res.end();
//   }
// });

// server.listen(8080);

// // // Start the server
// // const port = 3000;
// // server.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });
//-----------------------------------------------------------------------------------------------------------------------ch

// const http = require('http');
// const url = require('url');

// const books = [
//   'Alice in Wonderland',
//   'Animal Farm',
//   'A Game of Thrones',
//   'A Tale of Two Cities',
//   'Anna Karenina',
// ];

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', (chunk) => {
//       body += chunk;
//     });

//     req.on('end', () => {
    
//       const searchResults = books.filter((book) => {
//         return startsWith("a");
//       });

//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(searchResults));
//     });
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });

// server.listen(8080);
//--------------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------
//3. /home/books/1 -> res.end({ "title": "1984", id: 1, author: "George Orwell" })
//   -> find the book with the given id
