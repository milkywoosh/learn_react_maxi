import React from "react";
import Card from '../../UI/Card';
import './DataShow.css';

function DataShow(props) {

    return (
        <Card className='card-data-show'>


            <div className="data-show-control">

                <table>
                    <thead>
                        <tr>
                            <th style={{width:'70px'}}>id</th>
                            <th>client</th>
                            <th>current stock</th>
                            <th>last update stock</th>
                            <th>modify stock</th>
                        </tr>
                    </thead>
                    {props.onSetData.map((data) => {
                        const date = data.lastUpdate.toLocaleString('en-US', {day: '2-digit'});
                        const month = data.lastUpdate.toLocaleString('en-US', {month: '2-digit'});
                        const year = data.lastUpdate.getFullYear();
                        return (
                            <tbody key={data.id}>
                                <tr >
                                    <td style={{width:'70px'}}>{data.id}</td>
                                    <td>{data.client}</td>
                                    <td>{data.currentStock}</td>
                                    <td>{year}-{month}-{date}</td>
                                    
                                    <td><button className='button-edit' onClick={() => alert('click !!')}> Edit Stock </button></td>
                                </tr>
                            </tbody>


                        )
                    })}
                </table>

            </div>
          

        </Card>
    )
}
export default DataShow;