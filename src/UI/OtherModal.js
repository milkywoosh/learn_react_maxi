import React from 'react';
import ReactDOM from 'react-dom';
import classes from './OtherModal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}
            onClick={props.onClick}
        >

        </div>
    )
}
const OtherModalOverlay = (props) => {

    return (
        <div className={classes.OtherModalStyle}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalOverlayElement = document.getElementById('overlay')

function OtherModal(props) {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalOverlayElement)}
            {ReactDOM.createPortal(<OtherModalOverlay>{props.children}</OtherModalOverlay>, portalOverlayElement)}
            {/* // React.createPortal() */}
        </>
    )
}

export default OtherModal;