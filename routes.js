"use strict";

module.exports = function (app) {
  let jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilAgenda);
  app.route("/tampil/:id").get(jsonku.tampilAgendaById);
  app.route("/tambah/").post(jsonku.tambahAgenda);
};
