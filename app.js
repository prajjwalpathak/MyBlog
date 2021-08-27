const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const homeContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const aboutContent =
  "Nec ullamcorper sit amet risus nullam eget felis eget nunc. Eget aliquet nibh praesent tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const contactContent = "mailid@mail.com, twitter, reddit";

let posts = [];

app.get("/", (req, res) => {
  res.render("index", {
    homeData: homeContent,
    postData: posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const composeInput = {
    title: req.body.titleBox,
    post: req.body.postBox,
  };
  posts.push(composeInput);
  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const requestedPost = _.lowerCase(req.params.postName);

  posts.forEach(function (post) {
    const storedPost = _.lowerCase(post.title);
    if (requestedPost === storedPost) {
      res.render("post", {
        postTitle: post.title,
        postContent: post.post,
      });
    }
  });
});

app.listen(3000, (req, res) => {
  console.log("Server running at port 3000");
});
