import React from 'react';
import People from "./components/people/People";
import MainMenu from "./components/mainMenu/MainMenu";
import {Route, Switch} from "react-router-dom";
import Films from "./components/films/Films";
import Starships from "./components/starships/Starships";
import Vehicles from "./components/vehicles/Vehicles";
import Species from "./components/species/Species";
import Planets from "./components/planets/Planets";
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.wrapper}>
            <MainMenu/>
            <Switch>
                <Route exact path = '/StarWars' render={ () => <div />}/>
                <Route exact path = '/People' render={ () => <People/>}/>
                <Route exact path = '/Films' render={() => <Films/>}/>
                <Route exact path = '/Starships' render={() => <Starships/>}/>
                <Route exact path = '/Vehicles' render={() => <Vehicles/>}/>
                <Route exact path = '/Species' render={() => <Species/>}/>
                <Route exact path = '/Planets' render={() => <Planets/>}/>
                <Route exact path = '*' render={() => <div className={styles.notFound}>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;