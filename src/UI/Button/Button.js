import React from 'react';
import styles from './Button.module.css';


function Button(props) {
    const btnClass = `${styles.btnMain} ${props.className}`
    return (
        <button
            onClick={props.onClick}
            type={props.type}
            className={btnClass}
        >
            {props.children}
        </button>
    )
}
export default Button;