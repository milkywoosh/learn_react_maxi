import React from "react";
import './App.css';
import NewDataInput from "./components/NewDataInput/NewDataInput";
import TableDataShow from "./components/TableDataShow/TableDataShow";

const DataSource = [
    {
        id: Math.random().toString(36).substring(2, 9),
        fullName: 'Ben',
        emailPerson: 'Ben@gmail.com',
        birthDate: new Date(2000, 1, 20),
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        fullName: 'Ron',
        emailPerson: 'Ron@gmail.com',
        birthDate: new Date(1999, 2, 23),
    },
];


function App(props) {


    return (

        <div className=''>
            <NewDataInput />
            <TableDataShow onSupplyData={DataSource} />
        </div>
    )
}

export default App;