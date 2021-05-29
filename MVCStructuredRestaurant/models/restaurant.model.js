const textService = require("../textService");
const { v4: uuidv4 } = require("uuid");
const { text } = require("body-parser");

class RestaurantModel {
  getAllDishes() {
    return new Promise((resolve, reject) => {
      const text = textService.readDataFromDb("restaurant.json");
      resolve(JSON.parse(text));
    });
  }
  getDishById(dishId) {
    return new Promise((resolve, reject) => {
      const text = textService.readDataFromDb("restaurant.json");
      const data = JSON.parse(text);
      const dish = data.dishes.filter(dish => dish.id === dishId)[0];

      if (dish) {
        resolve(dish);
      } else {
        reject({
          message: "Error! Dish not found!",
        });
      }
    });
  }
  createNewDish(dish) {
    return new Promise((resolve, reject) => {
      dish.id = uuidv4();
      const dbDataText = textService.readDataFromDb("restaurant.json");
      const dbData = JSON.parse(dbDataText);
      dbData.dishes.push(dish);
      const dbDataStringified = JSON.stringify(dbData);
      textService.writeDataToDb("restaurant.json", dbDataStringified);

      resolve({
        message: "Dish successfully added!",
      });
    });
  }

  deleteDish(dishId) {
    return new Promise((resolve, reject) => {
      const dbDataText = textService.readDataFromDb("restaurant.json");
      const dbData = JSON.parse(dbDataText);

      const filtered = dbData.dishes.filter(dish => dish.id !== dishId);
      dbData.dishes = filtered;

      const dbDataStringified = JSON.stringify(dbData);
      textService.writeDataToDb("restaurant.json", dbDataStringified);

      resolve({
        message: "Dish sucessfuly deleted!",
      });
    });
  }

  updateDish(id, body) {
    return new Promise((resolve, reject) => {
      const dbDataText = textService.readDataFromDb("restaurant.json");
      const dbData = JSON.parse(dbDataText);

      dbData.dishes.forEach(dish => {
        if (dish.id === id) {
          dish.name = body.name;
          dish.price = body.price;
        }
      });

      const stringified = JSON.stringify(dbData);
      textService.writeDataToDb("restaurant.json", stringified);

      resolve({
        message: "Dish successfully updated!",
      });
    });
  }
}

module.exports = RestaurantModel;
