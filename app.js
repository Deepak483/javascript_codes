//async code example
console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log(`We are waiting for the data to come`);
    callback({ userEmail: email });
  }, 5000);
}
const user = loginUser("deepaktiwari@gmail.com", 12334, (user) => {
  console.log(user);
});

// javascript won't wait for the above command to execute
console.log(`End`);
