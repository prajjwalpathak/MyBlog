const express = require("express");
const ejs = require("ejs");

app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const aboutContent = "Nec ullamcorper sit amet risus nullam eget felis eget nunc. Eget aliquet nibh praesent tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.";

const contactContent = "Diam maecenas ultricies mi eget mauris pharetra et ultrices neque.";

app.get("/", (req, res)=>{

    res.render("index", {homeContent: homeContent});
});

app.get("/about", (req, res)=>{

    res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", (req, res)=>{

    res.render("contact", {contactContent: contactContent});
});

app.get("/compose", (req, res)=>{

    res.render("compose");
});

app.post ("/compose", (req, res)=> {

    const composeInput = req.body.postTitle;
    console.log(composeInput);
});






app.listen(3000, (req, res)=> {
    console.log("Server running at port 3000");
});