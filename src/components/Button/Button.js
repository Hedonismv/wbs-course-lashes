import React from "react";
import style from './Button.module.css';

const Button = props => {
    return (
        <button style={props.relative ? {position: "relative", top: "20px"} : null} className={props.color === 'primary' ? style.primary + ` ${style.button}` : style.secondary + ` ${style.button}`}>{props.text}</button>
    )
}

export default Button;