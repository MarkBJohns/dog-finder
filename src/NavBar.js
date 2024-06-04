import React from "react";
import dogList from "./dogList";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return (
        <div>
            {dogList.map(dog => (
                <div key={dog.name}>
                    <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default NavBar;