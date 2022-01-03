import React from "react";
import styles from './Button.module.css';

function Button(props) {


    return (
        <div>
            <button className={styles.btnStyle}
                onClick={props.onClick}
                type={props.type}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;