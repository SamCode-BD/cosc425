import "./DentalInventory.css"
import ToothInput from "./ToothInput"
import HorizontalRadioButton from "/src/Right/Common/HorizontalRadioButton"
import {tooth_layout} from "./tooth_layout"
import {morphology_list} from "./morphology_list"
import {dental_help_text} from "./dental_help_text"
import React, {useState} from 'react'

export default function DentalInventory(props) {
    let[invType, setInvType] = useState("inventory");
    let[windowType, setWindowType] = useState("inventory");
    let[tooth, selectTooth] = useState("No tooth selected");
    let[trait, selectTrait] = useState("Winging");
    let[morphologyCategory, setMorphologyCategory] = useState("Maxillary");

    const getMorphology = () => {
        if(windowType == "morphology" && props.type == "permanent") {
            return(<>
            <p className="inventory-title">Morphology</p>
            <button onClick={() => {setMorphologyCategory("Maxillary");}}>Maxillary</button>
            <button onClick={() => {setMorphologyCategory("Mandibular");}}>Mandibular</button>
            {getMorphologyRadioButtons()}
            </>)
        }
    }

    const getMorphologyRadioButtons = () => {
        if(morphologyCategory == "Maxillary") {
            return(<>
                {Object.keys(morphology_list.maxillary).map((trait, i) => 
                    <HorizontalRadioButton key={i} name={trait} selectValue={() => selectTrait(trait)}/>)}
            </>)
        }
        else if(morphologyCategory == "Mandibular") {
            return(<>
                {Object.keys(morphology_list.mandibular).map((trait, i) => 
                    <HorizontalRadioButton key={i} name={trait} selectValue={() => selectTrait(trait)}/>)}
            </>)
        }
    }

    const getOverlay = () => {
        if(windowType == "inventory") {
            if(invType == "metrics") {
                return(<div className="dental-1c">
                        {tooth}
                            <div className="dental-metrics-field">
                                <p>{"Height (mm):"}</p>
                                <input/>
                            </div>
                            <div className="dental-metrics-field">
                                <p>{"Width (mm):"}</p>
                                <input/>
                            </div>
                    </div>);
            }
            else {
                return(<div className="dental-1c">
                    {tooth}
                </div>)
            }
        }
    }

    const getButtons = () => {
        if(windowType == "inventory") {
        return(<>
            <button onClick={() => setInvType("inventory")}>Inventory</button>
            <button onClick={() => setInvType("development")}>Development</button>
            <button onClick={() => setInvType("wear")}>Wear</button>
            <button onClick={() => setInvType("metrics")}>Metrics</button>
            </>
        )}
    }

    const getToothBoxes = () => {
        if(props.type == "permanent") {
            if(windowType == "inventory") {
                return(<>
                {Object.keys(tooth_layout.perm).map((toothName, i) => <>
                <ToothInput inputType={invType} side="R" name={toothName} selectTooth={selectTooth}/>
                <ToothInput inputType={invType} side="L" name={toothName} selectTooth={selectTooth}/>
                </>
                )}</>)
            }
            else if(windowType == "morphology") {
                //Need to get list of teeth to show from morphology_list
                //Need to get list of where the boxes go in tooth_layout
                if(morphologyCategory == "Maxillary") {
                return(<>
                    {morphology_list.maxillary[trait] &&
                    morphology_list.maxillary[trait][1].map((toothName, i) => <>
                    <ToothInput side="R" name={toothName} selectTooth={selectTooth}/>
                    <ToothInput side="L" name={toothName} selectTooth={selectTooth}/>
                    </>
                    )
                    }</>)
                }
                else {
                    return(<>
                        {morphology_list.mandibular[trait] &&
                        morphology_list.mandibular[trait][1].map((toothName, i) => <>
                        <ToothInput side="R" name={toothName} selectTooth={selectTooth}/>
                        <ToothInput side="L" name={toothName} selectTooth={selectTooth}/>
                        </>
                        )
                        }</>)
                }
            }
        }
        else if(props.type == "deciduous") {
            return(<>
                {Object.keys(tooth_layout.dec).map((toothName, i) => <>
                <ToothInput dentition="dec" inputType={invType} side="R" name={toothName} selectTooth={selectTooth}/>
                <ToothInput dentition="dec" inputType={invType} side="L" name={toothName} selectTooth={selectTooth}/>
                </>
                )}</>)
        }
    }

    const getToothDisplay = () => {
        if(props.type == "permanent") {
            return(
            <div className="dental-perm-display">
                {getToothBoxes()}
                {getOverlay()}
            </div>)
        }
        else if(props.type == "deciduous") {
            return(
                <div className="dental-dec-display">
                    {getToothBoxes()}
                    {getOverlay()}
                </div>)
        }
    }

    const getHelpText = () => {
        if(windowType == "morphology" && props.type == "permanent") {
            //return <div>{morphology_list.help[0]}</div>
            return <div>help text</div>
        }
        else if(invType == "inventory") {
            return dental_help_text.inventory;
        }
        else if(invType == "development") {
            return dental_help_text.development;
        }
    }

    const getMainButtons = () => {
        if(props.type == "permanent") {
            return (<>
            <button onClick={() =>setWindowType("inventory")}>Inventory</button>
            <button onClick={() =>setWindowType("morphology")}>Morphology</button>
            </>);
        }
        else if(props.type == "deciduous") {
            return(
                <button onClick={() =>setWindowType("inventory")}>Inventory</button>
            )
        }
    }

    return(<>
        <div className="inv-morph">
            {getMainButtons()}
        </div>
    <div className="dental-inventory-layout">
        <div className="dental-3">
            {getMorphology()}
        </div>
        
        <div className="dental-1">
            <div className="dental-1a">
                {getButtons()}
            </div>
            {getToothDisplay()}
        </div>
        <div className="dental-2">
            {getHelpText()}
        </div>
    </div></>)
}

