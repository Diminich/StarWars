import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getPeople} from "../../redux/people-reducer";
import people from "./People.module.scss";
import {PeopleComponents} from "../../selectors/selectors";
import {NavLink} from "react-router-dom";
import {Input} from 'antd';

function People() {
    const [peopleName, setPeopleName] = useState('');
    const dispatch = useDispatch();

    const {Search} = Input;

    const onChangeInputPeople = ({currentTarget: {value}}) => setPeopleName(value);

    const requestPeople = () => {
        debugger
        dispatch(getPeople(peopleName));
        setPeopleName('')
    };

    return (
        <nav className={people.wrapper}>
            <div className={people.wrapperContent}>
                <div className={people.requestInputButton}>
                    <Search
                        placeholder="Add name people"
                        enterButton="Search"
                        size="large"
                        onChange={onChangeInputPeople}
                        onSearch={requestPeople}
                        value={peopleName}
                        type='search'
                    />
                    <NavLink to='/'>
                        <button>Back</button>
                    </NavLink>
                </div>
                <div className={people.specifications}>
                    <PeopleComponents/>
                </div>
            </div>
        </nav>
    );
}

export default People;