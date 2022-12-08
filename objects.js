// Arrays for order data

// const deepakArray = [
//   "Deepak",
//   "Tiwari",
//   2037 - 1999,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

//javascript object notation (json) for the unstructure data and ordering doesn't matter
//key value pair
// const deepak = {
//   firstName: "Deepak",
//   lastName: "Tiwari",
//   age: 2037 - 1999,
//   job: "teacher",
//   friends: ["Micheal", "Peter", "Stevan"],
//   cal
// };

// console.log(deepak);
// console.log(deepak.firstName);
// console.log(deepak['lastName']);

// const nameKey = 'Name';
// console.log(deepak['first' + nameKey]);
// console.log(deepak['last' + nameKey]);

// const interestedIn = prompt(`What do you want to know about the deepak? Choose between firstName,lastName,age,job and friends`);
// console.log(deepak[interestedIn]);

// deepak.location = 'Mumbai';
// deepak['twitter'] = '@deepak483';
// console.log(deepak);

const deepak = {
  firstName: 'Deepak',
  lastName: 'Tiwari',
  birthYear: 1999,
  job: 'software developer',
  friends: ['Ram', 'Shayam', 'Ghanshayam'],
  hasDriverLicense: false,

  calAge: function () {
    // console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  
  getSummary: function () {
    console.log(`${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has a ${deepak.hasDriverLicense ? 'a' : 'no'} driver's license `);
  }
};
// console.log(deepak.calAge());//output : 23
// console.log(deepak.age);//output:23
// console.log(deepak.calAge());
// console.log(deepak.calAge(1991));
// console.log(deepak.calAge(deepak.birthYear));

// console.log(deepak.getSummary());

console.log(deepak.getSummary());
