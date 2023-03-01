import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import EmptyPage from './components/EmptyPage';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';

//antd imports
import { Row } from 'antd';
import { Button, Collapse } from 'antd';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';

function App() {
  const [food, setFood] = useState(foods);
  const [foodToDisplay, setFoodToDisplay] = useState(foods);
  const [isFormShowing, setIsformShowing] = useState(false);

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

  const deleteFood = (foodToDelete) => {
    const updatedFood = food.filter((food) => {
      if (food.name.includes(foodToDelete)) {
        return false;
      } else {
        return true;
      }
    });
    setFood(updatedFood);
    setFoodToDisplay(updatedFood);
  };

  return (
    <div className="App">
      <div>
        <Button
          type="primary"
          ghost="true"
          onClick={() => setIsformShowing(!isFormShowing)}
        >
          Add New Food
        </Button>

        <CollapsePanel in={isFormShowing}>
          <AddFoodForm setFood={setFood} setFoodToDisplay={setFoodToDisplay} />
        </CollapsePanel>
      </div>

      <Search filterFood={filterFood} />
      <Row>
        {foodToDisplay.map((meal) => (
          <FoodBox
            key={meal.name}
            deleteFood={deleteFood}
            food={{
              name: meal.name,
              calories: meal.calories,
              image: meal.image,
              servings: meal.servings,
            }}
          />
        ))}
      </Row>

      {foodToDisplay.length === 0 && <EmptyPage />}
    </div>
  );
}

export default App;
