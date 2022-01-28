import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
// using REACT PORTAL -> OVERLAY PAGE/BLOCK PAGE BEHIND
// go to publib folder --> HTML file

const Backdrop = () => {
    return (
        <div className={classes.backdrop}>
            
        </div>
    )
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalOverlayElement = document.getElementById('overlay');

function Modal (props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalOverlayElement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalOverlayElement)}
            
        </>
              
    )
}
export default Modal;