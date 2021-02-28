let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.set("view engine", "ejs")

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html"); 
});

app.get("/sign-up", (req, res) => {
    res.sendFile(__dirname + "/sign-up.html"); 
}); 
app.get("/success", (req,res) => {
    res.sendFile(__dirname + "/success.html");
});




app.listen(3000, function(){
    console.log("Yaaaaaayyyyy! It's running!");
})
