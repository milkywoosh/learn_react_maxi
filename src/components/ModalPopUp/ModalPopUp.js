import React, { useState } from 'react';
import Card from '../../UI/Card';
import './ModalPopUp.css';

function ModalPopUp(props) {


    const change = props.onSetPopUp ? 'display-block': 'display-none';
    return (
        <div> 
            <section className={change}>
                <Card>
                    <h1> Okayy </h1>
                </Card>
            </section>  
        </div>
    )
}

export default ModalPopUp;