import React, {useState, useEffect} from "react";
import styles from "./Films.module.scss";
import {requestSearchFilms, requestSpecificFilms} from "./../../redux/films-reducer"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Select, Button} from 'antd';
import FilmsComponent from "./FilmsComponent"
import {debounce} from "lodash";

function Films() {
    const [titleFilms, setTitleFilms] = useState("");
    const [Films, setFilms] = useState([]);
    const [filmsSelect, setFilmsSelect] = useState({});
    const dispatch = useDispatch();
    const searchFilms = useSelector((state) => state.filmsPage.searchResult);
    const specificFilms = useSelector((state) => state.filmsPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setFilms(searchFilms);
    });

    useEffect(() => {
        setFilmsSelect(specificFilms);
    });

    useEffect(() => {
        dispatch(requestSearchFilms(titleFilms));
    }, [titleFilms]);

    const onSearchFilms = debounce((value) => {
        setTitleFilms(value);
    }, 1000);

    const getFilms = (value) => {
        const filmsId = parseInt(value?.match(/\d+/));
        dispatch(requestSpecificFilms(filmsId));
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
                        onSearch={onSearchFilms}
                        onSelect={getFilms}
                    >
                        {Films?.map((films) => {
                            return (
                                <Option key={films.url} value={films.url}>
                                    {films.title}
                                </Option>
                            );
                        })}
                    </Select>
                    <NavLink to="/">
                        <Button type="back">Back</Button>
                    </NavLink>
                </div>
                <div className={styles.specifications}>
                    <FilmsComponent filmsSelect={filmsSelect}/>
                </div>
            </div>
        </nav>
    );
}

export default Films;
