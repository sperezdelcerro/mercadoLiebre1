const path = require("path");
const express = require("express");
const app = express();


const publicPath = path.resolve(__dirname,"./public");
app.use (express.static(publicPath) );

app.listen (process.env.PORT || 3000, function()  {
    console.log("servidor corriendo en el puerto 3000");
});

app.get("/home", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})