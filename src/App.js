
import { useState } from 'react';
import './App.css';
import data from "./data";
import Tours from "./components/Tours";

function App() {

  const[tour,setTour] = useState(data);

function removeTour(id){
 const newTour = tour.filter(tour => tour.id !== id);
 setTour(newTour);
}

if(tour.length===0){
  return(
    <div className='refresh'>
      <h2>No Tours Left</h2>
      <button  className='btn-white' onClick={()=>setTour(data)}>
        Refresh
      </button>
    </div>
  );
}
  return (
    <div className='App'>
      
      <Tours tour={tour}  removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
