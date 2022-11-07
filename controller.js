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

// menambah data agenda
exports.tambahAgenda = function (req, res) {
  let tanggal = req.body.tanggal;
  let agenda = req.body.agenda;
  let tempat = req.body.tempat;
  let yang_menghadiri = req.body.yang_menghadiri;
  let dokumentasi = req.body.dokumentasi;
  let user = req.body.user;

  connection.query(
    "INSERT INTO agenda (tanggal, agenda, tempat, yang_menghadiri, dokumentasi, user) VALUES(?,?,?,?,?,?)",
    [tanggal, agenda, tempat, yang_menghadiri, dokumentasi, user],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Agenda!", res);
      }
    }
  );
};

// mengubah agenda berdasarkan ID
exports.ubahAgenda = function (req, res) {
  let id = req.body.id_agenda;
  let tanggal = req.body.tanggal;
  let agenda = req.body.agenda;
  let tempat = req.body.tempat;
  let yang_menghadiri = req.body.yang_menghadiri;
  let dokumentasi = req.body.dokumentasi;
  let user = req.body.user;

  connection.query(
    "UPDATE agenda SET tanggal=?, agenda=?, tempat=?, yang_menghadiri=?, dokumentasi=?, user=? WHERE id_agenda=?",
    [tanggal, agenda, tempat, yang_menghadiri, dokumentasi, user, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Agenda berhasil diubah!", res);
      }
    }
  );
};

// Delete agenda
exports.hapusAgenda = function (req, res) {
  let id = req.body.id_agenda;
  connection.query(
    "DELETE FROM agenda WHERE id_agenda=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Agenda berhasil dihapus..", res);
      }
    }
  );
};
