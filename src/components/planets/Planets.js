import React, {useEffect, useState} from "react";
import styles from "./Planets.module.scss";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Select} from "antd";
import {debounce} from 'lodash';
import {requestSearchPlanets, requestSpecificPlanets} from "../../redux/planets-reducer";
import PlanetsComponent from "./PlanetsComponent";

function Planets() {
    const [planetsName, setPlanetsName] = useState('');
    const [planets, setPlanets] = useState([]);
    const [planetsSelect, setPlanetsSelect] = useState({});
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.planetsPage.searchResult);
    const specificResult = useSelector((state) => state.planetsPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setPlanets(searchResult);
    });

    useEffect(() => {
        setPlanetsSelect(specificResult);
    });

    useEffect(() => {
        dispatch(requestSearchPlanets(planetsName));
    }, [planetsName]);

    const onSearchPeople = debounce((value) => {
        setPlanetsName(value);
    }, 1000);

    const getPeople = (value) => {
        const planetsId = parseInt(value?.match(/\d+/));
        dispatch(requestSpecificPlanets(planetsId))
    };

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
                        {planets?.map((planets) => {
                            return  <Option key={planets.url} value={planets.url}>{planets.name}</Option>
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button type="back">Back</Button>
                    </NavLink>
                </div>
                <div className={styles.specifications}>
                    <PlanetsComponent planetsSelect={planetsSelect} />
                </div>
            </div>
        </nav>
    );
}

export default Planets;