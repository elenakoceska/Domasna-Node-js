const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
  ];


/// zadaca 1

const filterStudenti = studenti.filter(function (studenti) {
    if(studenti.prosek > 7 && studenti.grad === "Skopje" && studenti.ime.endsWith ("a"))
    return studenti.prosek;
});
console.log(filterStudenti);


/// zadaca 2

const secfilterStudenti = studenti.filter(function (studenti) {
    if(studenti.prosek > 9 && studenti.grad !== "Skopje")
    return studenti.prosek;
});

console.log(secfilterStudenti);


/// zadaca 3


// const nameLength = studenti.filter(function (ime)) {
//     for (let i = 5; i < ime.length; i++) {
//         if (ime[i].length == 5 && studenti.prosek.sort){
//    return studenti.ime;
//     }
// }

// console.log(nameLength[i]);


// zadaca 4

studenti.sort((x,y) => {return y.prosek - x.prosek});
const prosekPoGrad = studenti.filter(({prosek}) => prosek >= 6);
console.log(prosekPoGrad)


/// zadaca 5
const studentiNaE = studenti.filter((student) => student.ime.endsWith("a"));
const studentiNeZavrsuvaatE = studenti.filter((student) => !student.ime.endsWith("a"));
const endsA = studentiNaE.reduce((acc, curr) => { 
})
    

