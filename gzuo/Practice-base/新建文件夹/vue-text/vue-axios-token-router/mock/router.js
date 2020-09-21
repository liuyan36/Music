const express = require("express");
const router = express.Router();
const connect = require("./connect");
const newsData = require("./data/news.json");

/**
 * 登陆接口
 *  有两个参数：用户名和密码
 *  
 */
router.post("/login", function(req, res) {
    // SELECT * FROM student WHERE `name`='iwen' AND `age`=20
    const sql = "select * from user where `username`=? and `password`=?";
    // 读取参数
    const username = req.body.username;
    const password = req.body.password;
    const paramsArr = [username, password]
    connect(sql, paramsArr, function(result) {
        if (result.length > 0) {
            res.send({
                userinfo:result,
                token:'DFGSERGDFG4G3GDFERG3'  // 在后台应该是通过加密形式生成
            });
        } else {
            res.send({
                msg: "查询失败,用户名密码不存在"
            })
        }
    })

})

/**
 * 注册接口
 */

router.post("/register", function(req, res) {
    // INSERT INTO student values(null,'ice',30,1000012)
    const sql = "insert into user values(null,?,?)";
    const username = req.body.username;
    const password = req.body.password;
    const paramsArr = [username, password]
    connect(sql, paramsArr, function(result) {
        if (result.affectedRows > 0) {
            res.send({
                msg: "注册成功"
            })
        } else {
            res.send({
                msg: "注册失败"
            })
        }
    })
})


router.get("/news", function(req, res) {
    res.send(newsData)
})

module.exports = router;