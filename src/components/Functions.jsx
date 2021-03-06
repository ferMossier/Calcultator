import React from 'react';
import Button from './button/Button';
import PropTypes from 'prop-types';

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type = "button-long-text" text = "AC" clickHandler = {onContentClear}/>
        <Button text = "⌫" clickHandler = {onDelete}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions;