import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import starships from "./Starships.module.scss"
import {StarshipsComponents} from "../../selectors/selectors";
import {useDispatch} from "react-redux";
import {getStarships} from "../../redux/starships-reducer";

function Starships() {
    const [starshipsTitle, setStarshipsTitle] = useState('');
    const dispatch = useDispatch();

    const onChangeInputStarships = ({currentTarget: {value}}) => setStarshipsTitle(value);
    const requestStarships = () => {
        dispatch(getStarships(starshipsTitle));
        setStarshipsTitle('')
    };

    return (
        <nav className={starships.wrapper}>
            <div className={starships.wrapperContent}>
                <div className={starships.requestInputButton}>
                    <input className={starships.requestInput} onChange={onChangeInputStarships} value={starshipsTitle}/>
                    <button onClick={requestStarships}>request</button>
                    <NavLink to = '/' ><button className={starships.buttonBack}>Back</button></NavLink>
                </div>
                <div className={starships.specifications}>
                    <StarshipsComponents/>
                </div>
            </div>
        </nav>
    )
}

export default Starships;