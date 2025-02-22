import LeftPane from './LeftPane.jsx'
import RightPane from './RightPane.jsx'
import React, {useState, useEffect, createContext} from 'react'
export const Context = createContext();



const useSessionStorage = (key, []) => {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : [];
    });
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

function FormContainer() {
    const key = ".";
    const [specIdList_, setSpecIdList_] = useSessionStorage(key,[]); //should be separated from the two UI variables below
    const [focusSpecId_, setFocusSpecId_] = useState(""); //Related to flow of website itself, so makes sense as a variable
    const [rightPaneSubMenu_, setRightPaneSubMenu_] = useState("");
    const context = {
        specIdList: [specIdList_, setSpecIdList_],
        focusSpecId: [focusSpecId_, setFocusSpecId_],
        rightPaneSubMenu: [rightPaneSubMenu_, setRightPaneSubMenu_]
    }

    return(<div className="form-container">
    <Context.Provider value={context}>
        <LeftPane/>
        <RightPane/>
    </Context.Provider>
    </div>);
}
export default FormContainer