const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/contactUs");

router.post("/", sendEmail);

module.exports = router;
