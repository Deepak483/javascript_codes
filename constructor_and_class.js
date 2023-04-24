class Student{
  constructor(name, age) {
    this.fullName = name;
    this.age = age;
  }
  markAttendance() {
    console.log(`${this.fullName} is present`);
  }
}
class SportCaptain extends Student{
  constructor(goal, ...rest) {
    super(...rest);
    this.goal = goal;
  }
  markAttendance() {
    console.log(`${this.fullName} with ${this.goal} is present`);
  }
  playFootball() {
    console.log(`${this.fullName} can play the football`);
  }
}

const s1 = new SportCaptain("deepak",22,3);
s1.playFootball();
console.log(s1.goal);
s1.markAttendance();

