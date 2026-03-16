// const namew = "magdi";
// let age = 20;
// const country = "egypt";
// let isHopies = true;

const { rejects } = require("node:assert");
const { resolve } = require("node:dns");

// age = 26;
// function showDetailes(username, userage, usercountry, userhobies) {
//   // this is parameters
//   return (
//     "my name is" +
//     " " +
//     username +
//     " , " +
//     "my age is " +
//     " " +
//     userage +
//     " , " +
//     "my country is " +
//     " " +
//     usercountry +
//     " , " +
//     "hobies " +
//     " " +
//     userhobies
//   );
// }

// console.log(showDetailes(namew, age, country, isHopies)); //this is argument القيمه الفعليه

// const myDetails = () => {
//   return `my name is ${namew} , my age is ${age}`;
// };
// console.log(myDetails());

// const person = {
//   // properties , key value ,faileds
//   name: "mage rpot ",
//   age: 26,
//   getName: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };

// console.log(person);
// console.log(person.getName());
// person.getName();

// const schoole = ["ahmed", "magdi", "ammer", "adel", "hamdey"];

// console.log(schoole);

// for (scol of schoole) {
//   console.log("hello " + scol);
// }

// schoole.map((scol) => {
//   console.log("hello : " + scol);
// });

// console.log(
//   schoole.map((scol) => {
//     return "hello : " + scol;
//   }),
// );

// const schoole = ["ahmed", "magdi", "ammer", "adel", "hammdey"];

// console.log(schoole.filter((scol) => scol.includes("mm")));

// schoole.push("saaaad");

// console.log(schoole);

// console.log(schoole.slice(1, 2));

// const schoole = ["ahmed", "magdi", "ammer"];
// const newSchoole = [...schoole, "adel", "hammdey"];
// console.log(newSchoole.slice(1, 4));

// const arrow = (...argumentwww) => {
//   return console.log(argumentwww);
// };
// arrow("ahmed", "adel",  "heommos","abdo", "heommos");

// const person = {
//   name: "magdi",
//   age: 26,
//   city: "cairo",
//   getInfo() {
//     return `my name is ${this.name} and my age is ${this.age} and my city is ${this.city}`;
//   },
// };

// console.log(person.getInfo());

// console.log(person.name);
// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(person);

// function showData(personData) {
//   console.log(personData);
// }

// showData(person.age);

// const showData = () => {
//   const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello bro");
//     }, 2000);
//   });
//   return data;
// };

// setTimeout(() => {
//   console.log("this is my heart");
//   showData()
//     .then((text) => {
//       console.log(text);
//       return showData();
//     })
//     .then((text) => {
//       console.log(text);
//     });
// }, 2000);

const fetchData = () => {
  const data = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("Done ..!");
    }, 2000);
  });
  return data;
};

setTimeout(() => {
  console.log("from set time out");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then(() => {
      console.log("hello");
      return fetchData();
    });
}, 2000);
