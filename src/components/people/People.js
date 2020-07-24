import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestSearchPeople, requestSpecificPeople} from "../../redux/people-reducer";
import styles from "./People.module.scss";
import {NavLink} from "react-router-dom";
import {Select, Button} from 'antd';
import {debounce} from 'lodash';
import PeoplesComponent from "./PeoplesComponent";

function People() {
    const [peopleName, setPeopleName] = useState('');
    const [peoples, setPeoples] = useState([]);
    const [peoplesSelect, setPeoplesSelect] = useState({});
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.peoplePage.searchResult);
    const specificResult = useSelector((state) => state.peoplePage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setPeoples(searchResult);
    });

    useEffect(() => {
        setPeoplesSelect(specificResult);
    });

    useEffect(() => {
        dispatch(requestSearchPeople(peopleName));
    }, [peopleName]);

    const onSearchPeople = debounce((value) => {
        setPeopleName(value);
    }, 1000);

    const getPeople = (value) => {
        const peopleId = parseInt(value?.match(/\d+/));
            dispatch(requestSpecificPeople(peopleId))
    }

    return (
        <nav className={styles.wrapper}>
            <div className={styles.wrapperContent}>
                <div className={styles.backButton}> 
                    <Select
                        showSearch
                        style={{width: 470}}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onSearch={onSearchPeople}
                        onSelect={getPeople}
                    >
                        {peoples?.map((hero) => {
                            return  <Option key={hero.url} value={hero.url}>{hero.name}</Option>
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button type="back">Back</Button>
                    </NavLink>
                    </div>
                    <div className={styles.specifications}>
                        <PeoplesComponent  peoplesSelect={peoplesSelect} />
                    </div>
            </div>
        </nav>
    );
}

export default People;