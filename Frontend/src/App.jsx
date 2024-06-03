import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react';

//page and components
import Home from './Pages/Home'
import Navbar from './Components/Nabar'

function App() {
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
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={ <Home /> }
              />
            </Routes>
        </div>
        </BrowserRouter>

      <div className="content">
          <Home />
          <h1>{title}</h1>
      </div>
    </div>
  {/* <StarwarsDisplay data={data} /> */}
</>
  )
}

export default App