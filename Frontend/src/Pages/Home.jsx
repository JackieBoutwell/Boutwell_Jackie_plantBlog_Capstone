
import {  useEffect, useState } from 'react'
// adding useEffect and useState to trigger a render and show ne data.
// fetching the data

//components
import PlantDetails from '../Components/PlantDetails'

const Home = () => {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        const fetchPlants = async () => {
            // const response = await fetch('http://localhost:8080/api/plants')
            // const json = await response.json()
            // console.log("data",json)
            
            const url = 'https://house-plants2.p.rapidapi.com/category/Fern';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '818816d76fmshec5f96e5bcd9cd6p121067jsn3e4c582a5cf7',
		'x-rapidapi-host': 'house-plants2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
if (response.ok) {
    setPlants(result)
}
} catch (error) {
	console.error(error);
}
        }

        fetchPlants()
    }, [])


    // const getPlants = async () => {
    //     // Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.
    //     const response = await fetch(
    //         `https://house-plants2.p.rapidapi.com/category/Fern`
         
    //     );
    //     const data = await response.json();

    return (
        <>
            <div className="home">
                {/* <input type="text" /> */}
            <div className='plants'>
                    {plants && plants.map((plant, i) => (
                    <PlantDetails key={i} plant={plant} imOnSaved="false" />
 ))}
                </div>
        </div>
            </>
            )
        }

export default Home