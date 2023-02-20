import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import NewFood from './pages/newFood';
import Navbar from './components/navbar';
import useFoods from './state/state';


function App() {
  const { calories, setCalories, foods, setFoods, handleDelete, handleFoodSubmit } = useFoods();
  return (
   
    <Router>
        <Navbar />
      <Routes>
          
          <Route path="/" element={<Main calories={calories} food={foods} handleDelete={handleDelete} setFoods= {setFoods} setCalories={setCalories}/>} />
          <Route path="/foods/new/" element={<NewFood key={calories} setFoods = {setFoods} Calories={calories} setCalories={setCalories} />} />
        
      
  
      </Routes>
      
    </Router>
  );
}

export default App;
