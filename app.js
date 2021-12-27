const express = require("express");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const { checkAuth, checkRole } = require("./middleware/check-auth");
const { ROLE } = require("./helper/role");
// routes imporations
const apiRoute = require("./routes/api");
const userRoute = require("./routes/user");
const patientRoute = require("./routes/patient");
const medecinRoute = require("./routes/medecin");
const infirmierRoute = require("./routes/infirmier");
const reservationRoute = require("./routes/reservation");
const villeRoute = require("./routes/ville");
const vaccinRoute = require("./routes/vaccin");

// auth and perms routes imporations
const authRoute = require("./routes/auth");
const rolePermissionRoute = require("./routes/rolePermission.js");
// HOME & test route
app.use("/", apiRoute);

// routes
app.use("/user", userRoute);
app.use("/infirmier", infirmierRoute);
app.use("/medecin", medecinRoute);
app.use("/patient", patientRoute);
app.use("/reservation", reservationRoute);
app.use("/parametrage", authRoute);
app.use("/ville", villeRoute);
app.use("/vaccin", vaccinRoute);

// auth and perms
app.use(
  "/role_permission",
  // checkAuth,
  // checkRole([ROLE.ADMIN]),
  rolePermissionRoute
);
app.use("/auth", authRoute);
// app.use(
//   "/villes",
//   checkAuth,
//   checkRole([ROLE.ADMIN, ROLE.FINANCER, ROLE.NORMAL]),
//   villeRoute
// );

module.exports = app;
