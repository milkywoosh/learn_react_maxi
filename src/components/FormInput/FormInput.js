import React, { useState } from "react";


function FormInput(props) {

    const [name, setName] = useState('')
    const [division, setDivision] = useState('')

    const inputNameHandler =(event)=> {
        setName(event.target.value)
    }
    const inputDivisionHandler =(event)=> {
        setDivision(event.target.value)
    }

    const inputSubmitHandler =(e)=> {
        e.preventDefault();

        const DataInput =  {
            id: Math.random().toString(36).substring(2,9),
            name: name,
            division: division
        }

        // console.log(DataInput);
        props.onAddDataInput(DataInput)
        setName('')
        setDivision('')
    }

    return(
        <div>
            <form onSubmit={inputSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input required value={name} onChange={inputNameHandler} placeholder="type your name"/>
                </div>
                <div>
                    <label>Division</label>
                    <input required value={division} onChange={inputDivisionHandler} placeholder="type division name"/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormInput;