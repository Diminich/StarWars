import React from 'react';
import {NavLink} from "react-router-dom";

function MainWindow() {
    return (
        <nav>
            <NavLink to = '/People'>People</NavLink>
            <NavLink to = '/Films'>Films</NavLink>
        </nav>
    );
}

export default MainWindow;