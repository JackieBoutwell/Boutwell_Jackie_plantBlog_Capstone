import React, { useEffect, useState } from "react";
import PlantDetails from "../Components/PlantDetails";


function Search() {
    const [searchPlants, setSearchedPlants] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getPlants = async () => {
        console.log(searchValue);
        const url = `https://house-plants2.p.rapidapi.com/category/${searchValue}`;
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
            setSearchedPlants(result);
            
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const changeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="home">
            <div>
                <input type="text" onChange={changeSearchValue} value={searchValue} />
                <button onClick={() => getPlants()}>Search</button>
            </div>
            <div className="plants">
                {searchPlants && searchPlants.map((plant, i) => {
                    return (
                        <PlantDetails key={plant._id} plant={plant} imOnSaved="true" />
                    );
                })}
            </div>
        </div>
    );
}

export default Search;
