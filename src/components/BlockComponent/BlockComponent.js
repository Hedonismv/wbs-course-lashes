import React from "react";
import style from './BlockComponent.module.css';

const BlockComponent = (props) => {
    return (
        <div key={props.text} className={style.main_block}><span className={style.newLine}>{props.text}</span></div>
    )
}

export default  BlockComponent;