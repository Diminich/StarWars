import React from 'react';
import People from "./components/people/People";
import MainWindow from "./components/mainWindow/mainWindow";
import {Route, Switch} from "react-router-dom";
import Films from "./components/films/Films";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path = '/' render={() => <MainWindow/>} />
                <Route exact path = '/People' render={ () => <People/>}/>
                <Route exact path = '/Films' render={() => <Films/>}/>
            </Switch>
        </div>
    );
}

export default App;