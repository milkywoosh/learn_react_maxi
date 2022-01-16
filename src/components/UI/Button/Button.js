import React from "react";
import './Button.module.css';

function Button(props) {


    return (
        <div>
            <button className={props.className}
                onClick={props.onClick}
                type={props.type}
                disabled={props.disabled}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;