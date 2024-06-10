import { useState, useEffect, useReducer } from 'react';

    export const reducer = (state, action) => {
        switch (action.type) {
            case 'delete_plant':
                return { plants: state.plants.filter(plant => plant.id !== action.id) };
            case 'add_plants':
                return { plants: action.plants }
            case 'show_saved':
                return state
        }
    }



    // };

    // useEffect(() => {
    //     getPlants();
    // }, []);

    const handleDelete = (id) => {
        dispatch({
            type: 'delete_plant',
            id: id
        })
    }
