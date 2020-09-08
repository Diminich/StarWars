import React, {useState} from 'react';
import cn from 'classnames';
import styles from './MainMenu.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";

function MainMenu() {
    const [exitMenu, setExitMenu] = useState(false)
    const {pathname} = useLocation();
    return (
        <nav className={cn(pathname === '/' ? styles.wrapper :
            (exitMenu === false ? styles.hideWrapper : styles.smallWrapper))}>
            <div className={cn(pathname === '/' ? styles.peopleFilmsStarships : styles.smallPeopleFilmsStarships)}>
                <NavLink className={styles.lineHighlight} to='/People'>People</NavLink>
                <NavLink className={styles.lineHighlight} to='/Films'>Films</NavLink>
                <NavLink className={styles.lineHighlight} to='/Starships'>Starships</NavLink>
            </div>

            <div className={cn(pathname === '/' ? styles.vehiclesSpeciesPlanets : styles.smallVehiclesSpeciesPlanets)}>
                <NavLink className={styles.lineHighlight} to='/Vehicles'>Vehicles</NavLink>
                <NavLink className={styles.lineHighlight} to='/Species'>Species</NavLink>
                <NavLink className={styles.lineHighlight} to='/Planets'>Planets</NavLink>
            </div>

            <Button className={cn(pathname === '/' ? styles.buttonMainMenu : styles.buttonSmallMenu)} type="primary"
                    onClick={() => setExitMenu(!exitMenu)}>
                <MenuOutlined/>
            </Button>

        </nav>
    );
}

export default MainMenu;