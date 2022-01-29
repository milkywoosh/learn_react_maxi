import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


import classes from './Modal.module.css';
// using REACT PORTAL -> OVERLAY PAGE/BLOCK PAGE BEHIND
// go to publib folder --> HTML file

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}
            onClick={props.onClick}
            >
            
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
            {/* onClick on  BACKDROP WILL CLOSE AUTO
            `   but onClick on MODALOverlay will NOT have EFFECT !!
            */}

{/* https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a */}
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalOverlayElement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalOverlayElement)}
            
        </>
              
    )
}
export default Modal;