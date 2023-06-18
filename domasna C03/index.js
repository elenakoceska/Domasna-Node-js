//1. writeFile with fs => core module

const fs = require('fs');
const fileName = "info.txt";
const content = ('Elena Koceska');

const writeFile = () => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, constent, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };





//2. make a hello world function and require it => local module

const helloWorld = () => {
  console.log("Hello World");
}

module.exports = {
  helloWorld
};

//drug nacin
function hello() {
  console.log("Hello world");

};

module.exports = hello;

//3. find some package on npmjs.com and require it => third party module







