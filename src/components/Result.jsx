import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value }) => (
    <div className="result">
        {value}
    </div>
)

//El componente funcional de arriba es equivalente al de abajo, pero en versión más resumida
//es posible hacerlo porque solo tiene un return y no hay más funcionalidad dentro.
// const Result = ({ value }) => {
//     return (
//         <div className="result">
//             {value}
//         </div>
//     )
// }

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result;

//la linea 3 ({ value })  es equivalente, pero mas corta, a: 
//const Result = (props) => {
//    const { value } = props;  