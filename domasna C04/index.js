//Homework
// 1. Local module for file write and read

const fs = require ('fs');
let testInput = "This is a test";
fs.writeFile('test.txt', testInput, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Test File')
    }
    
});
console.log("Test");


const fs = require ('fs');
fs.readFile('test.txt', (error, data) => {
    if(error) {
        console.log(error); 
    } else {
        console.log(data)

    }
});




// 2. Use append to append data and then read the new data appended

fs.writeFile('newtest.txt', "This is test number 2", {flag: 'a'}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("This is new test");
    }
});




// 3. Read the new data when change has been made

fs.readFile('newtest.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data)
    }
});




// 4. Plus: async/await should wrapped in try/catch

try {
   const testUser = await User.create(userInfo)
} catch (err) {
    console.error(err)
}

console.log(testUser)
