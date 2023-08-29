// 1. CRUD module for -> cars, universities, courses - these are for example

//const fs = require ('fs');

const cars = [
    {id: 1,
     brand: "Mercedes",
     model: "C-class",
     year:2017
    },
    {id: 2,
     brand: "Opel",
     model: "Corsa",
     year: 2021
    },
    {id: 3,
     brand: "Toyota",
     model: "Avensis",
     year: 2020
    },
];
console.log(cars);


// 2. Add new car -> data.json


const newCar = async (newCarData) => {
    let cars = await read();
    cars.push(newCar);
    await write(cars)
}


// 3. Get all cars and get single car by id -> getSingleCarById(505)

const allCars = async () => {
    for(let i = 0; i < cars.length; i++) {
        //id += cars[i].id;
    return await read();
}};

// let allCars = document.getElementById ("id");
// for(let i = 0; i < cars.length; i++) {
//     id += cars[i].id;
// }
document.write(names);

//document.write(document.getElementById("id");

// 4. Remove car by id

const deleteCar = async (carId) => {
    let cars = await read();
    cars = cars.filter((car, id) => id === 2);
    await write (cars);
};


// 5. Update car by id


// 6. Optional: Try to use parameters instead of hardcoded strings