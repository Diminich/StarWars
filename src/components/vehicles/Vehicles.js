import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import vehicles from "./Vehicle.module.scss"
import {VehiclesComponents} from "../../selectors/selectors";
import {useDispatch} from "react-redux";
import {getVehicles} from "../../redux/vehicles-reducer";

function Vehicles() {
    const [vehiclesTitle, setVehiclesTitle] = useState('');
    const dispatch = useDispatch();
    const onChangeInputVehicles = ({currentTarget: {value}}) => setVehiclesTitle(value);
    const requestVehicles = () => {
        dispatch(getVehicles(vehiclesTitle));
        setVehiclesTitle('');
    };

    return (
        <nav className={vehicles.wrapper}>
            <div className={vehicles.wrapperContent}>
                <div className={vehicles.requestInputButton}>
                    <input className={vehicles.requestInput} onChange={onChangeInputVehicles} value={vehiclesTitle}/>
                    <button onClick={requestVehicles}>request</button>
                    <NavLink to='/'>
                        <button className={vehicles.buttonBack}>Back</button>
                    </NavLink>
                </div>
                <div className={vehicles.specifications}>
                    <VehiclesComponents/>
                </div>
            </div>
        </nav>
    )
}

export default Vehicles