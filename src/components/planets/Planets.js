import React, {useState} from "react";
import planets from "../people/People.module.scss";
import {NavLink} from "react-router-dom";
import {PlanetsComponents} from "../../selectors/selectors";
import {useDispatch} from "react-redux";
import {getPlanets} from "../../redux/planets-reducer";

function Planets() {
    const [titlePlanets, setPlanetsTitle] = useState('');
    const dispatch = useDispatch();

    const onChangeInputPlanets = ({currentTarget: {value}}) => setPlanetsTitle(value);
    const requestPeople = () => {
        dispatch(getPlanets(titlePlanets));
      setPlanetsTitle('');
    };

    return (
        <nav className={planets.wrapper}>
            <div className={planets.wrapperContent}>
                <div className={planets.requestInputButton}>
                    <input className={planets.requestInput} onChange={onChangeInputPlanets} value={titlePlanets} />
                    <button onClick={requestPeople}>request</button>
                    <NavLink to = '/' ><button className={planets.buttonBack}>Back</button></NavLink>
                </div>
                <div className={planets.specifications}>
                    <PlanetsComponents/>
                </div>
            </div>
        </nav>
    )
}

export default Planets;