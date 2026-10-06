const express = require("express");
const app = express();

app.use(express.json());

function checklogin(req, res ,next){
    const login = false;

    if(login){
        next();
    }else{
        res.status(401).send("please login");
    }
}
app.get("/profile", checklogin, (req, res) =>{
    res.send("welcome to your profile");
});

app.listen(4001, () => {
    console.log("Server running on port 3000");
});