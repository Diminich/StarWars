import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getPeople} from "../../redux/people-reducer";
import people from "./People.module.scss";
import {PeopleComponents} from "../../selectors/selectors";
import {NavLink} from "react-router-dom";

function People() {
    const [peopleId, setPeopleId] = useState('');
    const dispatch = useDispatch();

    const onChangeInputPeople = ({currentTarget: {value}}) => setPeopleId(value);

    const requestPeople = () => {
        dispatch(getPeople(peopleId));
        setPeopleId('')
    };

    return (
        <nav className={people.wrapper}>
            <div className={people.wrapperContent}>
                <div className={people.requestInputButton}>
                    <input className={people.requestInput} onChange={onChangeInputPeople} value={peopleId} />
                    <button onClick={requestPeople}>request</button>
                    <NavLink to = '/' ><button className={people.buttonBack}>Back</button></NavLink>
                </div>
                <div className={people.specifications}>
                    <PeopleComponents/>
                </div>
            </div>
        </nav>
    );
}

export default People;