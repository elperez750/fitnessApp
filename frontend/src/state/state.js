import { useState, useEffect } from 'react';

const useFoods = () => {
  const [calories, setCalories] = useState(0);
  const [foods, setFoods] = useState([]);

  const handleDelete = async (id) => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/api/foods/${id}/delete/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCalories((prevCalories) => prevCalories - data.calories);
        let updatedFoods = foods.filter((food) => food.id !== id);
        setFoods(updatedFoods);
      } else {
        console.log('Response error:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  let getFoods = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/foods/');
    let data = await response.json();
    setFoods(data);
  };

  const handleFoodSubmit = (newFood) => {
    setFoods((prevFoods) => [newFood, ...prevFoods]);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return { calories, setCalories, foods, setFoods, handleDelete, handleFoodSubmit };
};

export default useFoods;
