import React from 'react';
import People from "./components/people/People";
import MainWindow from "./components/mainWindow/MainWindow";
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
            <Switch>
                <Route exact path = '/' render={() => <MainWindow/>}/>
                <Route exact path = '/People' render={ () => <People/>}/>
                <Route exact path = '/Films' render={() => <Films/>}/>
                <Route exact path = '/Starships' render={() => <Starships/>}/>
                <Route exact path = '/Vehicles' render={() => <Vehicles/>}/>
                <Route exact path = '/Species' render={() => <Species/>}/>
                <Route exact path = '/Planets' render={() => <Planets/>}/>
                <Route exact path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
}

export default App;