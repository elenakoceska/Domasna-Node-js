// const fs = require("fs");


// const getTextArea = async (req, res) => {
//   try {
//     let output = await parseTemplate("index");
//     res.send(output);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const postTextArea = async (req, res) => {
//     const {letter} = req.body;
  
//     if (data === null) {
//       return res.status(400).send("Bad Request");
//     }
  
//     let letterCount;
//     for(i=0; i==5; i++); {}
// }
// const parseTemplate = async (template, data = null) => {
//     console.log("path", `${__dirname}/../index.html/${template}.html`);
//     return new Promise((success, fail) => {
//       fs.readFile(
//         `${__dirname}/../index.html/${template}.html`, "utf-8",
//         (err, content) => {
//           if (err) return fail(err);
//           if (data) {
//             for (d in data) {
//               content = content.replaceAll(`{{${d}}}`, data[d]);
//             }
//           }
//           return success(content);
//         }
//       );



//     });
//   };
  

  
//   module.exports = {
//     getTextArea
//   };



  //----------------------------------------------------------------2 varijanta
//   const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('./index.html', (req, res) => {
//   res.send(`
//     <form action="/" method="post">
//       <textarea name="inputText"></textarea>
//       <br>
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });


// app.post('./index.html', (req, res) => {
//   const inputText = req.body.inputText;
//   const words = inputText.split(' ');
//   const fiveLetterWords = words.filter(word => word.length === 5);
//   res.send(`Words with 5 letters: ${fiveLetterWords.join(', ')}`);
// });

// // Start the server
// app.listen(8080, () => {
//   console.log('Server listening on port 8080');
// });




//===========================================================
//Domasna C09


const fs = require("fs");

const getAnalysis = async (req, res) => {
  try {
    let output = await parseTemplate("analiza-forma");
    res.send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const postAnalysis = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).send("Bad request");
  }};

  const charLength = text.length;
  const words = text.split(' ');
  
  const wordLessThanFive = words.filter((word) => word.length < 5).length;
  //   - вкупен број на зборови поголеми од 5 карактери
  const wordMoreThanFive = words.filter((word) => word.length > 5).length;
  //   - вкупен број на зборови еднакви на 5 карактери
  const wordWithFive = words.filter((word) => word.length === 5).length;
  //   - број на реченици
  const sentence = text.split(".");
  console.log("sentence", sentence);
  //   - број на зборови
  //   - број на зборови кои почнуваат на една од следниве букви: а, о, у, и, е
  const wordsWithLetter = words.filter((word) => {
    if (
      word.startsWith("а") ||
      word.startsWith("о") ||
      word.startsWith("у") ||
      word.startsWith("и") ||
      word.startsWith("е")
    )
      return word;
  });
  const data = {
    numChars: charLength,
    lessThanFive: wordLessThanFive,
    moreThanFive: wordMoreThanFive,
    equalFive: wordWithFive,
    sentenceLen: sentence.length,
    wordLen: words.length,
    wordsAEIOU: wordsWithLetter,
  };


  // try {
  //   let output = await parseTemplate("analiza", { ...data });
  //   console.log("output", output);
  //   res.send(output);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send("Internal Server Error");
  // }



  // const parseTemplate = async (template, data = null) => {
  //   //if we do not call parseTemplate with data, data will stay null
  //   console.log("path", `${__dirname}/../views/${template}.html`);
  //   return new Promise((success, fail) => {
  //     fs.readFile(
  //       `${__dirname}/../views/${template}.html`, //analiza-form.html ili analiza.html
  //       "utf-8",
  //       (err, content) => {
  //         if (err) return fail(err);
  //         if (data) {
  //           //false
  //           for (d in data) {
  //             content = content.replaceAll(`{{${d}}}`, data[d]);
  //           }
  //         }
  //         return success(content); //ja vrakja analiza-forma.html so GET
  //         //ja vrakja analiza.html so POST
  //       }
  //     );
  //   });
  //};
  
  module.exports = {
    getAnalysis,
    postAnalysis,
  };
