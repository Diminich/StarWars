import React from 'react';
import styles from './MainWindow.module.scss'
import {NavLink} from "react-router-dom";

function MainWindow() {
    return (
        <nav className={styles.wrapper}>
            <div className={styles.peopleFilmsStarships}>
            <NavLink className={styles.lineHighlight} to = '/People'>People</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Films'>Films</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Starships'>Starships</NavLink>
            </div>
            <div className={styles.vehiclesSpeciesPlanets}>
            <NavLink className={styles.lineHighlight} to = '/Vehicles'>Vehicles</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Species'>Species</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Planets'>Planets</NavLink>
            </div>
        </nav>
    );
}

export default MainWindow;