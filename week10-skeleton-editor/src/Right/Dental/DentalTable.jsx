import {tooth_layout} from "./tooth_layout.jsx"
import React, {useState} from 'react'

export default function DentalTable(props) {

    let [testValue, setTestValue] = useState("")

    const getRows = () => {
        if(props.dentition == "perm") {
            return(<>
            {Object.keys(tooth_layout.perm).map((toothName, i) =>
            <tbody style={{border: "2px solid gray"}}>
            <tr><th scope="row">{"L" + toothName}</th>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-long"/></td>
            <td><input className="dental-table-input-long"/></td>
            </tr>
            <tr><th scope="row">{"R" + toothName}</th>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-long"/></td>
            <td><input className="dental-table-input-long"/></td>
            </tr>
            </tbody>
            )}

            </>)
        }
        else if(props.dentition == "dec") {
            return(<>
            {Object.keys(tooth_layout.dec).map((toothName, i) =>
            <tbody style={{border: "2px solid gray"}}>
            <tr><th scope="row">{"L" + toothName}</th>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-long"/></td>
            <td><input className="dental-table-input-long"/></td>
            </tr>
            <tr><th scope="row">{"R" + toothName}</th>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-short"/></td>
            <td><input className="dental-table-input-long"/></td>
            <td><input className="dental-table-input-long"/></td>
            </tr>
            </tbody>
            )}

            </>)
        }
    }

    return(<div className="dental-table">
        <table className="noBorder">
            <thead style={{border: "3px solid gray"}}>
            <tr>
                <th scope="col" style={{padding: "0",margin: "0"}}>Tooth</th>
                <th scope="col">Inv.</th>
                <th scope="col">Dev.</th>
                <th scope="col">Wear</th>
                <th scope="col">Width</th>
                <th scope="col">Height</th>
            </tr>
            </thead>
               {getRows()}
        </table>
    </div>)
}