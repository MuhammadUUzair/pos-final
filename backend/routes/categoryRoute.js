const express = require("express");
const { addCategory,getCategories } = require("../controllers/categoryController");
const router = express.Router();
const {isVerifiedUser} = require("../middleware/tokenVerification")



router.route("/").post(isVerifiedUser, addCategory);
router.route("/").get(isVerifiedUser, getCategories);



module.exports = router;