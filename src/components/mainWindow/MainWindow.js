import React from 'react';
import {NavLink} from "react-router-dom";

function MainWindow() {
    return (
        <nav>
            <NavLink to = '/People'>People</NavLink>
            <NavLink to = '/Films'>Films</NavLink>
            <NavLink to = '/Starships'>Starships</NavLink>
            <NavLink to = '/Vehicles'>Vehicles</NavLink>
            <NavLink to = '/Species'>Species</NavLink>
            <NavLink to = '/Planets'>Planets</NavLink>
        </nav>
    );
}

export default MainWindow;