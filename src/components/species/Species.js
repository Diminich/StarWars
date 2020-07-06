import React, {useState} from "react";
import species from "./Species.module.scss";
import {NavLink} from "react-router-dom";
import {SpeciesComponents} from "../../selectors/selectors";
import {useDispatch} from "react-redux";
import {getSpecies} from "../../redux/species-reducer";

function Species() {
    const [speciesTitle, setSpeciesTitle] = useState('');
    const dispatch = useDispatch();

    const onChangeInputSpecies = ({currentTarget: {value}}) => setSpeciesTitle(value);
    const requestSpecies = () => {
        dispatch(getSpecies(speciesTitle));
       setSpeciesTitle('');
    };

    return (
        <nav className={species.wrapper}>
            <div className={species.wrapperContent}>
                <div className={species.requestInputButton}>
                    <input className={species.requestInput} onChange={onChangeInputSpecies} value={speciesTitle}/>
                    <button onClick={requestSpecies}>request</button>
                    <NavLink to = '/' ><button className={species.buttonBack}>Back</button></NavLink>
                </div>
                <div className={species.specifications}>
                    <SpeciesComponents/>
                </div>
            </div>
        </nav>
    )
}

export default Species;