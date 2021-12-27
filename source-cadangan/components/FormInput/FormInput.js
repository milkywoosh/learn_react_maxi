import React, { useState } from "react";
import './FormInput.css';


function FormInput() {

    const [client, setClient] = useState('')
    const [currStock, setCurrStock] = useState('')
    const [dateIncoming, setDateIncoming] = useState('')

    const inputHandler =(event)=> {
        event.preventDefault();
        const dataInput = {
            id: Math.random().toString(36).substring(2,9),
            client: client,
            currentStock: currStock,
            lastUpdate: dateIncoming
        }

        console.log(dataInput);

        setClient('')
        setCurrStock('')
        setDateIncoming('')
    }

    const enterClientHandler =(event)=> {
        setClient(event.target.value)
    }
    const enterCurrStockHandler =(event)=> {
        setCurrStock(event.target.value)
    }
    const enterDateIncomingHandler =(event)=> {
        setDateIncoming(event.target.value)
    }

    return (
        <form onSubmit={inputHandler}>
            <div className='form-data-control-wrapper'>
                <div className='form-data-control'>
                    <label>client</label>
                    <input
                        required
                        type='text'
                        value={client}
                        onChange={enterClientHandler}
                        placeholder="Insert client" />
                </div>
                <div className='form-data-control'>
                    <label>current stock</label>
                    <input
                        required
                        type='number'
                        value={currStock}
                        onChange={enterCurrStockHandler}
                        placeholder="Insert current stock" />
                </div>
                <div className='form-data-control'>
                    <label>date incoming</label>
                    <input
                        required
                        type='date'
                        value={dateIncoming}
                        onChange={enterDateIncomingHandler}
                    />
                </div>
                <div className='form-data-control'>
                    <button type='submit'>Add new client</button>
                </div>
            </div>
        </form>

    )
}

export default FormInput;

