import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../css/styles.css';



export default function NewFood({setFoods, Calories, setCalories, handleFoodSubmit}) {
 
    const [food, setFood] = useState({name:"", calories:""});
    
    console.log(Calories);

    const navigate = useNavigate();

    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://127.0.0.1:8000/api/foods/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(food)
            
          });
          navigate('/');
         
          const data = await response.json();
          console.log(data.calories + "over trhe")
          
          setFoods((prevFoods) => [...prevFoods, data]);
          setCalories(Calories => Calories + data.calories)
          localStorage.setItem('calories', Calories + parseInt(data.calories));
      
          console.log(JSON.stringify(food));
         
         
          
        } catch (error) {
          
          console.error(error);
        }
      };

      const handleNameChange = (event) => {
        setFood({...food, name: event.target.value });
        
    };
    
    const handleCaloriesChange = (event) => {
        setFood({...food, calories: event.target.value });

       

    };
    const handleMealChange = (event) => {
      setFood({...food, meal: event.target.value });
  };


  return (
    <div className="food-form">
      <form classname="text-center" onSubmit={handleSubmit}>
      <div className='form-group'>
        <label class= "label" htmlFor="name">Name:</label>
        <input
          type="text"
          className='form-control input-sm'

          id="name"
          value={food.name}
          onChange={handleNameChange}
        />
      </div>
      <div className='form-group'>
        <label class="label" htmlFor="calories">Calories:</label>
        <input
        type="integer"
        className='form-control input-sm'
        id="calories"
        value={food.calories}
        onChange={handleCaloriesChange}
      />

    <div className='form-group'>

      <label class="label" htmlFor="meal">
        Meal:
        <select value={food.meal} onChange={handleMealChange}>
          <option value="">-- Select a meal --</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>
      </div>
      </div>
      <button className="create-food" class="btn btn-info" type="submit" >Create Food</button>
    </form>

    </div>
  )
}
