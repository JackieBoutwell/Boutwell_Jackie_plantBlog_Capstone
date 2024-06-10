import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { reducer } from "./Components/PlantManager"
//page and components
import Home from './Pages/Home'
import Navbar from './Components/Nabar'
import Saved from "./Pages/Saved"

import 'bootstrap/dist/css/bootstrap.min.css';


const getPlants = async () => {
           const response = await fetch('http://localhost:8080/api/plants')
            const json = await response.json()
    console.log("data", json)
    return json
}
    

function App() {

      let initialState = getPlants()
    const [state, dispatch] = useReducer(reducer, initialState);

  const title = "Welcome to the plant blog";

//  const [starwars, setStarwars] = useState(null) 
//   useEffect(( )=> {
//     getStarwars()
//   },[])

//   // Function to get movies
//   const getStarwars = async (searchTerm) => {
//     // Make fetch request and store the response
//     const response = await fetch(
//       `https://swapi.dev/api/people/1/`
//     );
//     // Parse JSON response into a JavaScript object
//     const data = await response.json();
//     // Set the Movie state to the received data
//     setStarwars(data);
//   };
//   console.log(starwars)




//Plant API that only works with the front end, keeping here just in case i need.
//    const [plants, setPlants] = useState(null) 
//   useEffect(( )=> {
//     getPlants()
//   }, [])
  
// const getPlants = async (searchTerm) => {
//   const response = await fetch(
//     `https://trefle.io/api/v1/plants?token=GbYZBjMb3PCIVu23yx3GC1c_S_RmSZblAauVvs1X5sc` 
//   );
//  const data = await response.json();
//   setPlants(data);
// };
//   console.log(plants)
 

  return (
    <> 
      <div className="App">
        <BrowserRouter>
          <Navbar />
 
        <div className="content">
          {/* <Home /> */}
          <h1>{title}</h1>
      </div>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={ <Home dispatch={dispatch} state={state} /> }
              />
               <Route
                path="/Saved"
                element={ <Saved dispatch={dispatch} state={state} /> }
              />
            </Routes>
        </div>
        </BrowserRouter>

    
    </div>
  {/* <StarwarsDisplay data={data} /> */}
</>
  )
}

export default App