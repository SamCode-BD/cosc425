import React, {useState, useContext, useEffect} from 'react'
import { Context } from './FormContainer';

const defaultDentalInfo = {
    toothId: "",
    toothType: "",
    position: "",
    condition: ""
}

const useSessionStorage = (key, defaultDentalInfo) => {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultDentalInfo;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

function EditDental() {
    const key = useContext(Context).focusSpecId[0] + ".dent";
    const [dental, setDental] = useSessionStorage(key, defaultDentalInfo);
    const [toothId, setToothId] = useState(dental.toothId);
    const [toothType, setToothType] = useState(dental.toothType);
    const [position, setPosition] = useState(dental.position);
    const [condition, setCondition] = useState(dental.condition);

    const handleToothId = (e) => {
        setToothId(e.target.value);
    }
    const handleToothType = (e) => {
        setToothType(e.target.value);
    }
    const handlePosition = (e) => {
        setPosition(e.target.value);
    }
    const handleCondition = (e) => {
        setCondition(e.target.value);
    }

    const handleSave = () => {
        const newDental = {
            toothId: toothId,
            toothType: toothType,
            position: position,
            condition: condition
        }
        setDental(newDental);
    }

    return(<div className ="bone-form">
        <p style={{textAlign: "left", marginLeft:10, marginTop:10, fontSize:"0.75em"}}>
            Specimen {useContext(Context).focusSpecId[0]}</p>
        <h2>Dental Inventory</h2>
        <p>Tooth ID: <input type="text" value={toothId} onChange={handleToothId}></input></p>
        <p>Tooth Type: <select value={toothType} onChange={handleToothType}>
                    <option>{"Human"}</option>
                    <option>{"Monkey"}</option>
        </select></p>
        <p>Position: <select value={position} onChange={handlePosition}>
                    <option>{"Upper"}</option>
                    <option>{"Lower"}</option>
        </select></p>
        <p>Condition: <input type="text" value={condition} onChange={handleCondition}></input></p>
        <button onClick={handleSave}>Save</button>
        </div>)
}
export default EditDental