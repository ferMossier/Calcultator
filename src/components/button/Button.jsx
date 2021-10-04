import React from 'react';
import './Button.css';

import PropTypes from 'prop-types';

const Button = ({type, text, clickHandler}) => (
      <button className = {type} onClick = {() => clickHandler(text)}>
          <span>{text}</span>
      </button>
  )

Button.prototype = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}


export default Button;