import React, {useState} from 'react';
import cn from 'classnames';
import styles from './MainMenu.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";

function MainMenu() {
    const {pathname} = useLocation();
    const [isMenu, setIsMenu] = useState(false)

    return (
        <nav className={cn(pathname === '/' ? styles.wrapper :
            (!isMenu ? styles.hideWrapper : styles.smallWrapper))}>
            <Button className={cn(pathname === '/' ? styles.buttonMainMenu : styles.buttonSmallMenu)} type="primary"
                    onClick={() => setIsMenu(!isMenu)}>
                <MenuOutlined/>
            </Button>
            <div
                className={cn(pathname === '/' ? styles.peopleFilmsStarships : styles.smallPeopleFilmsStarships)}>
                <NavLink className={styles.lineHighlight} to='/People'>People</NavLink>
                <NavLink className={styles.lineHighlight} to='/Films'>Films</NavLink>
                <NavLink className={styles.lineHighlight} to='/Starships'>Starships</NavLink>
            </div>
            <div
                className={cn(pathname === '/' ? styles.vehiclesSpeciesPlanets : styles.smallVehiclesSpeciesPlanets)}>
                <NavLink className={styles.lineHighlight} to='/Vehicles'>Vehicles</NavLink>
                <NavLink className={styles.lineHighlight} to='/Species'>Species</NavLink>
                <NavLink className={styles.lineHighlight} to='/Planets'>Planets</NavLink>
            </div>
        </nav>
    );
}

export default MainMenu;