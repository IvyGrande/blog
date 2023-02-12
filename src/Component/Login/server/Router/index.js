// const express = require("express");
// const router = express.Router();
// const validator = require("validator");
// const isEmpty = require("lodash/isEmpty")
// const validatorInput = (data) => {
//     let errors = {};
//     if (validator.isEmpty(data.username)) {
//         errors.username = " 请填写用户名"
//     }
//     if (validator.isEmpty(data.username)) {
//         errors.password = " 请填写密码"
//     }
//     return {
//         errors,
//         isValid:isEmpty(errors)
//     }
// }
// router.post("/register", (req, res) => {
//     const {isValid, errors} = validatorInput(req.body);
//     if (!isValid){
//         res.send(errors);
//     }
// })
// // router.get("/list",(req,res))=>{
// //
// // }
//
// module.exports = router;