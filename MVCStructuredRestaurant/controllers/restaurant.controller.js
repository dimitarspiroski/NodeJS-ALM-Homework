const RestaurantModel = require("../models/restaurant.model");
const restaurantModel = new RestaurantModel();

class RestaurantController {
  fetchAllDishes() {
    return restaurantModel.getAllDishes();
  }

  fetchDishById(dishId) {
    return restaurantModel.getDishById(dishId);
  }

  createDish(dish) {
    return restaurantModel.createNewDish(dish);
  }

  deleteDish(dishId) {
    return restaurantModel.deleteDish(dishId);
  }
  updateDish(id, body) {
    return restaurantModel.updateDish(id, body);
  }
}

module.exports = RestaurantController;
