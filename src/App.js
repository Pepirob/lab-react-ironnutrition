import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

function App() {
  const [food, setFood] = useState(foods);
  const [foodToDisplay, setFoodToDisplay] = useState(foods);

  const filterFood = (searchQuery) => {
    const filteredFood = food.filter((food) => {
      const lowCaseQuery = searchQuery.toLowerCase();
      const lowCaseName = food.name.toLowerCase();
      if (lowCaseName.includes(lowCaseQuery)) {
        return true;
      } else {
        return false;
      }
    });
    setFoodToDisplay(filteredFood);
  };

  const deleteFood = (event) => {};

  return (
    <div className="App">
      <AddFoodForm setFood={setFood} setFoodToDisplay={setFoodToDisplay} />
      <Search filterFood={filterFood} />
      {foodToDisplay.map((meal) => (
        <FoodBox
          key={meal.name}
          food={{
            name: meal.name,
            calories: meal.calories,
            image: meal.image,
            servings: meal.servings,
          }}
        />
      ))}
    </div>
  );
}

export default App;
