// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener("click", (e) => {
//   console.log("grandparent is clicked");
// });

// parent.addEventListener("click", (e) => {
//   console.log("parent is clicked");
// });

// child.addEventListener("click", (e) => {
//   console.log("child is clicked");
// });

// document.addEventListener("click", (e) => {
//   console.log("document is clicked");
// });


const divs = document.querySelectorAll('div');
document.addEventListener('click', e => {
  if (e.target.matches('div')) {
    console.log('HII');
  } else {
    return;
  }
});

const newDiv = document.createElement('div');
newDiv.style.height = '200px';
newDiv.style.width = '200px';
newDiv.style.backgroundColor = 'cadetblue';
// newDiv.addEventListener('click', e => {
//   console.log('HII');
// })
document.body.append(newDiv);