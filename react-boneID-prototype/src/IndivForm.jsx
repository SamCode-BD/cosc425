import React, {useState, useContext} from 'react'
import { Context } from './FormContainer';

function IndivForm(props) {
    //const [indivs, setIndivs] = useState([]);
    const context = useContext(Context);
    const [indivs, setIndivs] = context.specIdList;

    const handleAddIndiv = () => {
        const newID = document.getElementById("addIndiv").value;
        const newIndiv = {
            id: newID
        }
        setIndivs([...indivs, newIndiv]);
        document.getElementById("addIndiv").value = "";
    }
    const handleIndivClick = (e) => {
        props.switchWindowFlag();
        let [_, setFocus] = context.focusSpecId;
        setFocus(e.target.value);
    }
    const handleClearData = () => {
        sessionStorage.clear();
        window.location.reload(false);
    }
    return(<div className="indiv-form">
        <h2>Specimen IDs:</h2>
        
        <ul style={{padding: "0", listStyleType: "none"}}>
            {indivs.map((indiv, index) => indiv.id && <li key={index}>
                <button style={{width: "250px"} } value={indiv.id} onClick={handleIndivClick}>ID: {indiv.id}</button>
            </li>)}
        </ul>
        
        
        <input type="text" id="addIndiv" placeholder="New ID"></input><br/>
        <button onClick={handleAddIndiv}>Add</button>
        <button onClick={handleClearData} style={{position: "absolute", top:"90%", left:"50%", translate: "-50% 0%"}}>
            Clear All Data</button>
    </div>)

}
export default IndivForm