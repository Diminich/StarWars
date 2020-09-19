import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Select} from "antd";
import styles from "./Starships.module.scss";
import {debounce} from 'lodash';
import StarshipsComponent from "./StarshipsComponent";
import {requestSearchStarships, requestSpecificStarships} from "../../redux/starships-reducer";
import {StarshipsSearchType, StarshipsSpecificType} from "../../Types/TypeStarships";
import {AppStateType} from "../../redux/redux-store";

function Starships() {
    const [starshipsName, setStarshipsName] = useState('');
    const [starships, setStarships] = useState<Array<StarshipsSearchType>>([]);
    const [starshipsSelect, setStarshipsSelectSelect] = useState<StarshipsSpecificType | null>(null);
    const dispatch = useDispatch();
    const searchResult = useSelector<AppStateType, Array<StarshipsSearchType>>(state => state.starshipsPage.searchResult);
    const specificResult = useSelector<AppStateType, StarshipsSpecificType | null>(state => state.starshipsPage.specificResult);
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

    const getPeople = (value: string) => {
        const peopleId = Number(value?.match(/\d+/))
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
                        {starships?.map((starships: {url: string, name: string}) => {
                            return (
                                <Option key={starships.url} value={starships.url}>
                                    {starships.name}
                                </Option>
                            )
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button>Back</Button>
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