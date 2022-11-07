"use strict";

let response = require("./res");
let connection = require("./koneksi");
const conn = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API berjalan!", res);
};

// menampilkan semua data agenda
exports.tampilAgenda = function (req, res) {
  connection.query("SELECT * FROM agenda", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan data agenda by ID
exports.tampilAgendaById = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM agenda WHERE id_agenda =?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
