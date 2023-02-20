import React, { useEffect } from 'react';
import ListItem from '../components/listItem';
import AddButton from '../components/addButton';

import useFoods from '../state/state';

export default function Main({calories, setCalories, food, setFoods, handleDelete, handleFoodSubmit}) {
  
  useEffect(() => {
    const savedCalories = localStorage.getItem('calories');
    if (savedCalories !== null) {
      setCalories(parseInt(savedCalories));
    }
  }, []);

  return (
    <div className='foods'>
      <div className="total-calories">Total Calories: {calories}</div>
      <div className="Meal">Breakfast:</div>
      {food.filter((food) => food.meal === "breakfast").map((food) => (
        <div className="food-container">
          <ListItem key={food.id} food={food} handleDelete={handleDelete}/>
        </div> 
      ))}
      <div className='Meal'>Lunch:</div>
      {food.filter((food) => food.meal === "lunch").map((food) => (
        <div className="food-container">
          <ListItem key={food.id} food={food} handleDelete={handleDelete}/>
        </div> 
      ))}
      <div className='Meal'>Dinner:</div>
      {food.filter((food) => food.meal === "dinner").map((food) => (
        <div className="food-container">
          <ListItem key={food.id} food={food} handleDelete={handleDelete}/>
        </div> 
      ))}
      <AddButton calories={calories} setCalories={setCalories} />
    </div>
  );
}
