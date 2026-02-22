// const namew = "magdi";
// let age = 20;
// const country = "egypt";
// let isHopies = true;

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


const schoole = ["ahmed", "magdi", "ammer", "adel", "hammdey"];
const isgo = schoole.some((scol) => scol.includes("m"));
if (isgo) {
  console.log(schoole.filter((scol) => scol.includes("mm")));
}
