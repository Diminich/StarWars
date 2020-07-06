import React, {useState} from "react";
import films from "./Films.module.scss";
import {NavLink} from "react-router-dom";
import {FilmsComponents} from "../../selectors/selectors";
import {useDispatch} from "react-redux";
import {getFilms} from "../../redux/films-reducer";


function Films() {
    const [titleFilms, setTitleFilms] = useState('');
    const dispatch = useDispatch();

    const onChangeFilmsTitle = ({currentTarget: {value}}) => setTitleFilms(value);

    const requestFilms = () => {
        dispatch(getFilms(titleFilms));
        setTitleFilms('');
    };

    return (
        <nav className={films.wrapper}>
            <div className={films.wrapperContent}>
                <div className={films.requestInputButton}>
                    <input className={films.requestInput} onChange={onChangeFilmsTitle} value={titleFilms}/>
                    <button onClick={requestFilms}>request</button>
                    <NavLink to = '/' ><button className={films.buttonBack}>Back</button></NavLink>
                </div>
                <div className={films.specifications}>
                    <FilmsComponents/>
                </div>
            </div>
        </nav>
    )
}

export default Films