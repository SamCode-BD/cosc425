import "./Left.css"
import React, {useState} from 'react'




function Left() {

    let [specNo, setSpecNo] = useState("");
    let [museum, setMuseum] = useState("");


    const getSpecimenID = () => {
        return museum + "_" + specNo;
    }



    return(<div className = "left">
        <div className = "exit-button"><button>{"<< Exit"}</button></div>
        <div className = "title">Skeleton Demo</div>
        <div className = "fields">
                <p>Museum:</p>
                <input onChange={(e) => setMuseum(e.target.value)}/>
                <p>Specimen No.:</p>
                <input onChange={(e) => setSpecNo(e.target.value)}/>
                <p>Specimen ID:</p>
                <p>{getSpecimenID()}</p>
                <p>Sex:</p>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>?Male</option>
                    <option>?Female</option>
                    <option>Unknown</option>
                </select>
        </div>
        <div className = "tax-button"><button>Taxonomy/Locality</button></div>
        <div className = "save-button"><button>Save</button></div>
    </div>);
}
export default Left