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
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

function getUserVideos(email, callback) {
  //   console.log(email + " User Name: " + "Deepak");
  setTimeout(() => {
    callback(["videos1", "videos2", "videos3"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(`title of the video`);
  }, 2000);
}

// javascript won't wait for the above command to execute
console.log(`End`);
