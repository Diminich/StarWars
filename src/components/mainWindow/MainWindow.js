import React from 'react';
import cn from 'classnames';
import styles from './MainWindow.module.scss'
import {NavLink, useLocation} from "react-router-dom";

function MainMenu() {
    const {pathname} = useLocation();
    return (
        <nav className={cn(pathname === '/' ? styles.wrapper : styles.smallWrapper)}>
            <div className={cn(pathname === '/' ? styles.peopleFilmsStarships : styles.smallPeopleFilmsStarships)}>
            <NavLink className={styles.lineHighlight} to = '/People'>People</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Films'>Films</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Starships'>Starships</NavLink>
            </div>
            <div className={cn(pathname === '/' ? styles.vehiclesSpeciesPlanets : styles.smallVehiclesSpeciesPlanets)}>
            <NavLink className={styles.lineHighlight} to = '/Vehicles'>Vehicles</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Species'>Species</NavLink>
            <NavLink className={styles.lineHighlight} to = '/Planets'>Planets</NavLink>
            </div>
        </nav>
    );
}

export default MainMenu;