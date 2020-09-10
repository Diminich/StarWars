import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Select} from "antd";
import styles from "./Starships.module.scss";
import {debounce} from 'lodash';
import StarshipsComponent from "./StarshipsComponent";
import {requestSearchStarships, requestSpecificStarships} from "../../redux/starships-reducer";

function Starships() {
    const [starshipsName, setStarshipsName] = useState('');
    const [starships, setStarships] = useState([]);
    const [starshipsSelect, setStarshipsSelectSelect] = useState({});
    const dispatch = useDispatch();
    const searchResult = useSelector((state) => state.starshipsPage.searchResult);
    const specificResult = useSelector((state) => state.starshipsPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setStarships(searchResult);
    }, [searchResult]);

    useEffect(() => {
        setStarshipsSelectSelect(specificResult);
    },[specificResult]);

    useEffect(() => {
        dispatch(requestSearchStarships(starshipsName));
    }, [starshipsName]);

    const onSearchPeople = debounce((value) => {
        setStarshipsName(value);
    }, 1000);

    const getPeople = (value) => {
        const peopleId = parseInt(value?.match(/\d+/));
        dispatch(requestSpecificStarships(peopleId))
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
                        {starships?.map((starships) => {
                            return <Option key={starships.url} value={starships.url}>{starships.name}</Option>
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button type="back">Back</Button>
                    </NavLink>
                </div>
                <div className={styles.specifications}>
                    <StarshipsComponent starshipsSelect={starshipsSelect}/>
                </div>
            </div>
        </nav>
    );
}

export default Starships;