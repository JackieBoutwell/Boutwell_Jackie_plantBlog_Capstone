import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useReducer, useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { reducer } from "./Components/PlantManager"
//page and components
import Home from './Pages/Home'
import Navbar from './Components/Nabar'
import SavedData from './Pages/SavedData'
import SearchData from './Pages/SearchData'
import MakeComments from './Pages/Comment'

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
                path="/SavedData"
                element={ <SavedData dispatch={dispatch} state={state} /> }
              />
              <Route
                path="/SearchData"
                element={ <SearchData dispatch={dispatch} state={state} /> }
              />
                   <Route
                path="/Comment"
                element={ <MakeComments dispatch={dispatch} state={state} /> }
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