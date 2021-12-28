import React from "react";
import Card from "../../UI/Card";
import EachData from "../EachData/EachData";
import EachDataModif from "../EachDataModif/EachDataModif";

function TableDataShow(props) {


    return (
        <Card>
            {/* <EachData onDataSource={props.onSupplyData} /> */}

            {props.onSupplyData.map((data, i) => {
                const date = data.birthDate.toLocaleString('en-US', { day: '2-digit' });
                const month = data.birthDate.toLocaleString('en-US', { month: '2-digit' });
                const year = data.birthDate.getFullYear();
                const TimeInfo = `${year}-${month}-${date}`

                console.log(i)
                return (
                    < EachDataModif
                        key={i}
                        id={data.id}
                        fullName={data.fullName}
                        emailPerson={data.emailPerson}
                        dateTime={TimeInfo}


                    />
                )
            })}
        </Card>
    )
}

export default TableDataShow;