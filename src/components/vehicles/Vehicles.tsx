import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Select} from "antd";
import {debounce} from 'lodash';
import styles from "./Vehicle.module.scss";
import VehiclesComponent from "./VehiclesComponent";
import {requestSearchVehicles, requestSpecificVehicles} from "../../redux/vehicles-reducer";
import {AppStateType} from "../../redux/redux-store";
import {VechilesSearchType, VechilesSpecificType} from "../../Types/TypeVechiles";

function Vehicles() {
    const [vehiclesName, setVehiclesName] = useState('');
    const [vehicles, setVehicles] = useState<Array<VechilesSearchType>>([]);
    const [vehiclesSelect, setVehiclesSelect] = useState<VechilesSpecificType | null>(null);
    const dispatch = useDispatch();
    const searchResult = useSelector<AppStateType, Array<VechilesSearchType>>(state => state.vehiclesPage.searchResult);
    const specificResult = useSelector<AppStateType, VechilesSpecificType | null>(state => state.vehiclesPage.specificResult);
    const {Option} = Select;

    useEffect(() => {
        setVehicles(searchResult);
    }, [searchResult]);

    useEffect(() => {
        setVehiclesSelect(specificResult);
    }, [specificResult]);

    useEffect(() => {
        dispatch(requestSearchVehicles(vehiclesName));
    }, [vehiclesName]);

    const onSearchPeople = debounce((value) => {
        setVehiclesName(value);
    }, 1000);

    const getPeople = (value: string) => {
        const vehiclesId = Number(value?.match(/\d+/))
        dispatch(requestSpecificVehicles(vehiclesId))
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
                        {vehicles?.map((vehicles: {url: string, name: string}) => {
                            return (
                                <Option key={vehicles.url} value={vehicles.url}>
                                    {vehicles.name}
                                </Option>
                            )
                        })}
                    </Select>
                    <NavLink to='/'>
                        <Button>Back</Button>
                    </NavLink>
                </div>
                <div className={styles.specifications}>
                    <VehiclesComponent vehiclesSelect={vehiclesSelect}/>
                </div>
            </div>
        </nav>
    );
}

export default Vehicles