import React from "react";

const Dog = ({ name, age, src, facts }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={src} alt={name} style={{height: '30vh', width: 'auto'}}/>
            <h2>Age: {age}</h2>
            <ul style={{listStyle: 'none'}}>
                {facts.map((fact, i) => (
                <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dog;