import React, {useState, useEffect} from "react";
import styles from "./Films.module.scss";
import {requestSearchFilms, requestSpecificFilms} from "../../redux/films-reducer"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Select, Button} from 'antd';
import FilmsComponent from "./FilmsComponent"
import {debounce} from "lodash";
import {AppStateType} from "../../redux/redux-store";
import {FilmsSearchType, FilmsSpecificType} from "../../Types/TypeFilms";

function Films() {
    const [titleFilms, setTitleFilms] = useState("");
    const [Films, setFilms] = useState<Array<FilmsSearchType>>([]);
    const [filmsSelect, setFilmsSelect] = useState<FilmsSpecificType | null>(null);
    const dispatch = useDispatch();
    const searchFilms = useSelector<AppStateType, Array<FilmsSearchType>>(state => state.filmsPage.searchResult);
    const specificFilms = useSelector<AppStateType, FilmsSpecificType | null>(state => state.filmsPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setFilms(searchFilms);
    }, [searchFilms]);

    useEffect(() => {
        setFilmsSelect(specificFilms);
    }, [specificFilms]);

    useEffect(() => {
        dispatch(requestSearchFilms(titleFilms));
    }, [titleFilms]);

    const onSearchFilms = debounce((value) => {
        setTitleFilms(value);
    }, 1000);

    const getFilms = (value: string) => {
        const filmsId = Number(value?.match(/\d+/))
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
                        {Films?.map((films: {url: string, title: string}) => {
                            return (
                                <Option key={films.url} value={films.url}>
                                    {films.title}
                                </Option>
                            );
                        })}
                    </Select>
                    <NavLink to="/">
                        <Button>Back</Button>
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
