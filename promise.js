const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post three", body: "This is post three" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost() {
  setTimeout(() => {
    posts.push();
  }, 2000);
}


createPost({ title: "Post Three", body: "This is post three" });

getPost();
// const promise1 = Promise.resolve("Hello world!");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "i how  are you?")
// );

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );
