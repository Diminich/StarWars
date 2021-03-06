import React, {useEffect, useState} from "react";
import styles from "./Species.module.scss";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Select} from "antd";
import {debounce} from 'lodash';
import SpeciesComponent from "./SpeciesComponent";
import {requestSearchSpecies, requestSpecificSpecies} from "../../redux/species-reducer";
import {AppStateType} from "../../redux/redux-store";
import {SpeciesSearchType, SpeciesSpecificType} from "../../Types/TypeSpecies";

function Species() {
    const [speciesName, setSpeciesName] = useState('');
    const [species, setSpecies] = useState<Array<SpeciesSearchType>>([]);
    const [speciesSelect, setSpeciesSelect] = useState<SpeciesSpecificType | null>(null);
    const dispatch = useDispatch();
    const searchResult = useSelector<AppStateType, Array<SpeciesSearchType>>(state => state.speciesPage.searchResult);
    const specificResult = useSelector<AppStateType, SpeciesSpecificType | null>(state => state.speciesPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setSpecies(searchResult);
    }, [searchResult]);

    useEffect(() => {
        setSpeciesSelect(specificResult);
    }, [specificResult]);

    useEffect(() => {
        dispatch(requestSearchSpecies(speciesName));
    }, [speciesName]);

    const onSearchPeople = debounce((value) => {
        setSpeciesName(value);
    }, 1000);

    const getPeople = (value: string) => {
        const speciesId = Number(value?.match(/\d+/))
        dispatch(requestSpecificSpecies(speciesId))
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
                        {species?.map((species: {url: string, name: string}) => {
                            return  (
                                <Option key={species.url} value={species.url}>
                                    {species.name}
                                </Option>
                            )
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button>Back</Button>
                    </NavLink>
                </div>
                <div className={styles.specifications}>
                    <SpeciesComponent  speciesSelect={speciesSelect} />
                </div>
            </div>
        </nav>
    );
}

export default Species;