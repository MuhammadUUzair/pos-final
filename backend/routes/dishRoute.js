// const express = require("express");
// const { addDish, getDishes } = require("../controllers/dishController");
// const router = express.Router();
// const {isVerifiedUser} = require("../middleware/tokenVerification")



// router.route("/").post(isVerifiedUser, addDish);
// // router.route("/:id").get(isVerifiedUser, getDishes);
// router.route("/").get(isVerifiedUser, getDishes);
// router.route("/category/:categoryId").get(isVerifiedUser, getDishes);


// module.exports = router;


const express = require("express");
const { addDish, getDishes, getDishesByCategory } = require("../controllers/dishController");
const router = express.Router();
const { isVerifiedUser } = require("../middleware/tokenVerification");

// Route to add a new dish
router.route("/").post(isVerifiedUser, addDish);

// Route to fetch all dishes (without category filter)
router.route("/").get(isVerifiedUser, getDishes);

// Route to fetch dishes by category ID
router.route("/category/:categoryId").get(isVerifiedUser, getDishesByCategory);

module.exports = router;