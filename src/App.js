import React, { useState } from "react";
import DataInsertionForm from "./components/DataInsertionForm/DataInsertionForm";



const DATABASE = [
    {
        id: Math.random().toString(36).substring(2, 9),
        name: "Ben",
        division: "IT Dept"
    },
    {
        id: Math.random().toString(36).substring(2, 9),
        name: "Ron",
        division: "IT Dept"
    },
]

function App(props) {
    const [updateData, setUpdatedData] = useState(DATABASE);

    // update data onInsert();
    const UpdateInsertData = (entriData) => {
        setUpdatedData((prevData) => {
            return [entriData, ...prevData];
        })
    }

    return (
        <div>
            <DataInsertionForm OnSavedEnteredData={UpdateInsertData} />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Division</th>
                        </tr>
                    </thead>
                    <tbody>
                        {updateData.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.division}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App;