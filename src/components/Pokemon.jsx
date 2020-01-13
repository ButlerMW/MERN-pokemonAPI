import React, { useState, useEffect } from 'react';

const Pokemon = () => {
    const [state, setState] = useState("");
        
    const onClickHandler = () => {  
        console.log(state.length);
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => setState(response.results))
    };
    console.log(state.length);

    return (
        <div>
            <button onClick={onClickHandler}>Fetch Pokemon</button>
            {state.length > 0 && state.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            })}
        </div>
    );
  
};
export default Pokemon;