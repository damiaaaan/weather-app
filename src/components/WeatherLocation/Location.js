import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


//Asigna a la constante city el valor del parametro dentro de props si se llaman iguales.
const Location = ({ city }) => {

    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;