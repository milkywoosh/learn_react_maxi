import React from 'react';
import FormInput from '../FormInputt/FormInput';
import ListData from '../ListData/ListData';


function DataInput(props) {

    const updateData = (entryData) => {
        props.onSupplyDataInput(entryData);
    }

    return (
        <div>
            <div>
                <FormInput onSupply={updateData} />
            </div>
            <div>
                <ul>

                    {props.onUpdatedValue.map((data, i) => {
                            return (
                                <ListData
                                    key={i}
                                    id={data.id}
                                    email={data.email}
                                />
                            )

                        })}
                </ul>
            </div>
        </div>
    )
}

export default DataInput;