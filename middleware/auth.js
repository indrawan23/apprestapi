let connection = require("../koneksi");
let mysql = require("mysql");
let md5 = require("md5");
let response = require("../res");
let jwt = require("jsonwebtoken");
let config = require("../config/secret");
let ip = require("ip");

// controller untuk register
exports.registrasi = function (req, res) {
  let post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    opd: req.body.opd,
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  let query = "SELECT email FROM ?? WHERE ??";
  let table = ["user", "email", post.email];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        let query = "INSERT INTO ?? SET ?";
        let table = ["user"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Berhasil menambahkan data user baru", res);
          }
        });
      } else {
        response.ok("Email sudah terdaftar!");
      }
    }
  });
};
