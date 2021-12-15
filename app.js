const express = require("express");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const { checkAuth, checkRole } = require("./middleware/check-auth");
const { ROLE } = require("./helper/role");

const authRoute = require("./routes/auth");
const rolePermissionRoute = require("./routes/rolePermission.js");

app.use(
  "/role_permission",
  checkAuth,
  checkRole([ROLE.ADMIN]),
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
