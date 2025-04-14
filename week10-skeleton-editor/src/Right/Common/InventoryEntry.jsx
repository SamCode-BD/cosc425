import "/src/Right/Editor Window/EditorWindow.css"
import React, {useState, useContext} from 'react'
import { InventoryContext } from "../Editor Window/EditorContainer";

function InventoryEntry(props) {

    const inventoryContext = useContext(InventoryContext);

    let [buttonActive, setButtonActive] = useState(false);

    const getButton = () => {
        if(buttonActive == true) {
            return(
                <button onClick={() => {inventoryContext.setTaphonomyActive(true);
                                        inventoryContext.setActiveBone(props.name)
                                        inventoryContext.setSubmenuOfActiveBone(props.submenu)}}>Edit</button>
            );
        }
    }

    const getOption = () => {

        if(props.options != null) {

            if(props.options.length == 1) {
                return(<div className = "inventory-options">
                    <select>
                        {props.options.map((item, i) => <option value={item} key={i}>{item}</option>)}
                    </select>
                </div>);
            }

            else if(props.options.length == 2) {
                let lr = (props.submenu != "Vertebrae")?(
                <>
                    <p style ={{gridColumn: "1 / 2", margin: "0"}}>L</p>
                    <p style ={{gridColumn: "2 / 3", margin: "0"}}>R</p>
                </>):(<></>);

                return(<div className = "inventory-options">
                    {lr}
                    {props.options.map((list, i) => 
                    <select key={i} style={{gridRow: "2 / 3"}}>
                        {list.map((item, j) => <option value={item} key={j}>{item}</option>)}
                    </select>)}
            </div>)
            }

        }
        else {
            return(<div>null</div>)
        }
       
    }

    const getNumInput = () => {
        
        let numBoxes = Number(props.numBoxes);
        
        //console.log(numBoxes);
        let array = [];
        for(let i = 0; i < numBoxes; i++) {
            array.push(i);
        }

        let labels = [];
        if(props.labels == null) {
            for(let i = 0; i < numBoxes; i++) {
                labels.push("");
            }
        }
        else {
            labels = props.labels;
        }

        return(<div className="inventory-num-input">

                {labels.map((label, i) => <p key={i} style={{gridRow: "1 / 2", padding: "0", margin: "0"}}>{label}</p>)}

                {array.map((i) => <input type="number" key={i} style={{gridRow: "2 / 3", padding: "0", margin: "0"}}/>)}

        </div>)
    }

    const getInputElements = () => {
        if(props.type == null) {
            return(getBoxes());
        }
        else if(props.type == "option") {
            return(getOption());
        }
        else if(props.type == "num-input") {
            return(getNumInput());
        }
    }

    const getAppendicularBoxes = () => {
        if(props.numBoxes == "2") {
            return(<>
            <div className="appendicular-boxes">
                <p></p>
                <p>L</p>
                <p>R</p>

                <p>Prox Epi</p>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </>)
        }
        else if(props.numBoxes == "10") {
            return(<div className="appendicular-boxes">
            <p></p>
            <p>L</p>
            <p>R</p>

            <p>Prox Epi</p>
            <input type="checkbox"/>
            <input type="checkbox"/>

            <p>Prox 1/3</p>
            <input type="checkbox"/>
            <input type="checkbox"/>

            <p>Mid 1/3</p>
            <input type="checkbox"/>
            <input type="checkbox"/>

            <p>Dist 1/3</p>
            <input type="checkbox"/>
            <input type="checkbox"/>

            <p>Dist Epi</p>
            <input type="checkbox"/>
            <input type="checkbox"/>
            </div>)
        }
    }

    const getBoxes = () => {
        if(props.numBoxes == "1") {
            return (
                <div className = "inventory-checkboxes">
            <p></p>
            <input type="checkbox"/>
            </div>
        );
        }
        else if(props.numBoxes == "2") {
            if(props.submenu != "Vertebrae") {
                return (
                    <div className = "inventory-checkboxes">
                <p>L</p>
                <input type="checkbox"/>
                <p>R</p>
                <input type="checkbox"/>
                </div>
                );
            }
            else {
                return (
                    <div className = "inventory-checkboxes">
                <p></p>
                <input type="checkbox"/>
                <p></p>
                <input type="checkbox"/>
                </div>
                );
            }
            
        }
        else if(props.numBoxes == "3") {
            if(props.menu != "hf") {
                return (
                    <div className = "inventory-checkboxes">
                <p>L</p>
                <input type="checkbox"/>
                <p>Body</p>
                <input type="checkbox"/>
                <p>R</p>
                <input type="checkbox"/>
                </div>)
            }
            else {
                return (
                    <div className = "inventory-checkboxes">
                <p>L</p>
                <input type="checkbox"/>
                <p>R</p>
                <input type="checkbox"/>
                <p>?</p>
                <input type="checkbox"/>
                </div>)
            }
        }
    }

    if(props.submenu == "app-general") {
        return(<>
        <div className="inventory-title">
            {props.name}
        </div>
        <div className="inventory-entry appendicular" onMouseEnter={() => {setButtonActive(true)}}
                                                      onMouseLeave={() => {setButtonActive(false)}}>
            {getAppendicularBoxes()}
            {getButton()}
        </div>
        </>
            
        )
    }
    else {
        return(
        <div className="inventory-entry" onMouseEnter={() => {setButtonActive(true)}}
                                        onMouseLeave={() => {setButtonActive(false)}}>
            <p>{props.name}</p>
            {getInputElements()}
            {getButton()}
        </div>)
    }
}

export default InventoryEntry