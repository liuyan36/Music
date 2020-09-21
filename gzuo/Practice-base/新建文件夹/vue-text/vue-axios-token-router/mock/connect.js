const mysql = require("mysql");

const config = {
    host:"localhost",
    user:"root",
    password:"",
    database:"web1905"
}

const client = mysql.createConnection(config)

module.exports = function(sql,params,callback){
    // params：Array
    client.query(sql,params,function(error,result){
        if(error){
            console.log("数据库操作失败");
            return;
        }
        callback(result);
    })
}