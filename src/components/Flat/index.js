import React from "react";
import {connect} from "react-redux";
import {toggleLike} from "../../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faStar, faUser} from "@fortawesome/free-solid-svg-icons";

function Flat(props) {
    const formattedUnit = unit => (unit === 'квм' ? ['m', <sup key={0}>2</sup>] : unit);
    const formattedRooms = rooms => (`${rooms}-комн. квартира`);
    const _toggleLike = () => props.dispatch(toggleLike(props.flat.id));

    const { id, attributes, relationships, like } = props.flat;
    const { rooms, title, area, unit, address } = attributes;
    const { city, street, house, room } = address;
    const { attributes: { first_name, last_name, middle_name } } = relationships;

    return (
        <div className="flat">
            <div className="flat__id">ID: {id}</div>
            <div className={`flat__like ${like && 'active'}`}>
                <FontAwesomeIcon icon={faStar} onClick={_toggleLike} />
            </div>
            <div className="flat__title">{title}</div>
            <div className="flat__params" style={{marginTop: 'auto'}}>
                <span className="flat__rooms">{formattedRooms(rooms)}</span>
                <span>{area} {formattedUnit(unit)}</span>
            </div>
            <div className="flat__address">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{[city, 'ул. ' + street, 'д. ' + house, 'кв. ' + room].join(', ')}</span>
            </div>
            <div className="flat__agent">
                <FontAwesomeIcon icon={faUser} />
                <span>{[last_name, first_name, middle_name].join(' ')}</span>
            </div>
        </div>
    );
}

export default connect()(Flat)