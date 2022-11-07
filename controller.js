"use strict";

let response = require("./res");
let connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API berjalan!", res);
};

// menampilkan semua data agenda
exports.tampilagenda = function (req, res) {
  connection.query("SELECT * FROM agenda", function (error, rows, fileds) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
