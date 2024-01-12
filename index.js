const mysql = require ("mysql");
const express = require ("express")

const db = mysql.createConnection({
  host:"database-1.creie00qckvq.ap-southeast-2.rds.amazonaws.com",
  port:"3306",
  user:"admin",
  password:"",
  database:"my_db",
});

// to create database 
// db.connect((err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("Database connected.");
// });

// to create table, add unique id for each employee
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE employee (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), role VARCHAR(255))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
