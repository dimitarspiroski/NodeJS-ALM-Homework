const router = require("express").Router();
const RestaurantController = require("../controllers/restaurant.controller");
const restaurantController = new RestaurantController();

router.get("/:id?", (req, res) => {
  if (req.params && req.params.id) {
    const dishId = req.params.id;
    restaurantController
      .fetchDishById(dishId)
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  } else {
    restaurantController
      .fetchAllDishes()
      .then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }
});

router.post("/", (req, res) => {
  const dish = req.body;
  restaurantController.createDish(dish).then(response => {
    res.status(200).json(response);
  });
});

router.delete("/:id?", (req, res) => {
  const id = req.params.id;
  if (id) {
    restaurantController.deleteDish(id).then(response => {
      res.status(200).json(response);
    });
  }
});

router.put("/:id?", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  if (id && body) {
    restaurantController.updateDish(id, body).then(response => {
      res.status(200).json(response);
    });
  }
});

module.exports = router;
