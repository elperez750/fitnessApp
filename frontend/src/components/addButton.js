import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import NewFood from '../pages/newFood'


export default function AddButton({calories, setCalories}) {
  const [showNewFood, setShowNewFood] = useState(false);
  console.log(calories + 'butt')
  const handleClick = () => {
    setShowNewFood(true);
  }


  return (
    <div>
    <Link to="/foods/new">
        <button class = "add-food" className="btn btn-primary" onClick={handleClick}>Add Food</button>
    </Link>
    {showNewFood && <NewFood Calories={calories} setCalories={setCalories} setShowNewFood={setShowNewFood} />}
    </div>
  )
}
