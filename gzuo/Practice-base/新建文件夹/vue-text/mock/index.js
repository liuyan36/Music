const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router")

// post传递参数
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api",router)

app.listen(3000,function(){
    console.log(3000);
})

