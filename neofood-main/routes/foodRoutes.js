const express = require("express");
const foodController = require("../controllers/food/foodController.js");
const router = express.Router();

router.get("/complexSearch/", foodController.getAll);
router.get("/trending_food/", foodController.getTrendingFood);
router.get("/popular_foods/", foodController.getPopularFoods);
router.post("/get_all_foods/", foodController.getAllFoods);

module.exports = router;
