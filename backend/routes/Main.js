const express = require("express");
const router = express.Router();
const {
  login,
  register,
  empregister,
  emplogin,
  pmfetch,
  elefetch,
  paintfetch,
  bookemp,
  bookings,
  setcom,
  combooks,
  userbk,
  setcan,
  stillbookings,
  usercompleted
} = require("../controllers/Controller");

// router.post("/in", signin);
// router.post("/up", signup);
router.post("/login", login);
router.post("/signin", register);
router.post("/emp/signin",empregister)
router.post("/emp/login",emplogin)
router.get("/getpm",pmfetch)
router.get("/getele",elefetch)
router.get("/getpaint",paintfetch)
router.post("/booking",bookemp)
router.get("/mybookings",bookings)
router.get("/getcompbooks", combooks);
router.put("/setcomplete", setcom);
router.put("/setcancel", setcan);
router.get("/stillbooks", stillbookings);
router.get("/usercom", usercompleted);
module.exports = router;
