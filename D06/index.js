const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    //res.writeHead(200, { "Content-type":"text/html"});
        //  if (url === './books.js') {
            // for (i=0; i <= books.length; i++) {
            //     res.write(books.book + " " + books.author);
            //     res.end();
            //  }
     res.writeHead(200, { "Content-type":"text/html"});
        if(url === '/') {
            res.write("Book: Baudolino, Author: Umberto Eco"), 
            res.write("<br/> Book: Master and Margarita, Author: Mihail Bulgakov"),
            res.write("<br/> Book: Joke, Author: Milan Kundera");
            res.end();
        }      
});
// }
    
     
// });

server.listen(8080);

