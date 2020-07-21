import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchPeople, getSpecificPeople} from "../../redux/people-reducer";
import styles from "./People.module.scss";
import {NavLink} from "react-router-dom";
import {Select, Button} from 'antd';
import {debounce} from 'lodash';
import PeoplesComponents from "./PeoplesComponents";

function People() {
    const [peopleName, setPeopleName] = useState('');
    const [peoples, setPeoples] = useState([]);
    const [peoplesSelect, setPeoplesSelect] = useState({});
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.peoplePage.searchResult);
    const specificPeople = useSelector((state) => state.peoplePage.specificPeople);
    const {Option} = Select;
    console.log('specificPeople', specificPeople)

    useEffect(() => {
        setPeoples(searchResult);
    });

    useEffect(() => {
        setPeoplesSelect(specificPeople);
    });

    useEffect(() => {
        dispatch(getSearchPeople(peopleName));
    }, [peopleName]);

    const onSearchPeople = debounce ((value) => {
        setPeopleName(value);
    }, 500);

    const getPeople = debounce ((value) => {
        const peopleId = parseInt(value?.match(/\d+/));
        dispatch(getSpecificPeople(peopleId))
    }, 500);

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
                        <PeoplesComponents  peoplesSelect={peoplesSelect} />
                    </div>
            </div>
        </nav>
    );
}

export default People;