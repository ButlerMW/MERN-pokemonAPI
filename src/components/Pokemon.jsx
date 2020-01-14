import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Pokemon = () => {
    
    let [state, setState] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0){
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            // .then(response => response.json())
            .then(response => {
                state = response.data.results; 
                setState([...state])}
                );
                // console.log(response);
                console.log(state);  
            }
            },[count])
        
    
        const onClickHandler = () => {
            console.log(state); 
            // count++;
            if(count == 0){
                setCount(1);
            }
            else{
                setCount(0);
                setState([]);
            }
            console.log(count); 
        };

    return (
        <div>
            <button onClick={onClickHandler}>{count == 0 ? "Fetch Pokemon" : "Get yo ass back here!"}</button>
            {state.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            })}
        </div>
    );
  
};
export default Pokemon;
