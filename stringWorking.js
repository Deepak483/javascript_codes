// const airline = "TAP Airline Portugal";
// const plane = "A320";

// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-1));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = (seat) => {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log(`You got the middle seat 😁`);
//   else console.log(`You got lucky 😐`);
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

let alien = {
  name: 'Deepak',
  tech: 'JS',
  laptop: {
    cpu: 'i7',
    ram: 8,
    brand:'Asus'
  }
}
// delete alien.laptop
// console.log(alien.laptop?.cpu);
console.log(alien);
for (const key in alien) {
  if (Object.hasOwnProperty.call(alien, key)) {
    const element = alien[key];
    console.log(element);
  }
}
console.log(x);
var x = 1;


