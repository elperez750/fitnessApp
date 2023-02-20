import React from 'react'



export default function ListItem({food, handleDelete}) {

  

  

  return (

  <div class="list-container text-center">
    
  <div class="row">
    
    <div class="col">
     {food.name}
    </div>
    <div class="col">
     {food.calories}
    </div>
    <div class="col">
    <button className='delete-button' class="btn btn-info" onClick={() => handleDelete(food.id)}>Delete</button>
    </div>
  </div>
</div>
);
}
