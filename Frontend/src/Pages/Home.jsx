import {  useEffect, useState } from 'react'

const Home = () => {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        const fetchPlants = async () => {
            const response = await fetch('http://localhost:8080/api/plants')
            const json = await response.json()

            if (response.ok) {
                setPlants(json)
            }
        }

        fetchPlants()
    }, [])
    return (
        <>
        <div className="home">
            <div className='plants'>
                {plants && plants.map((plant) => (
                    <p key={plant._id}>{plant.common_name}</p>
                ))}
                </div>
        </div>
            </>
            )
        }

export default Home