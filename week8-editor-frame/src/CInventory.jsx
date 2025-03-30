import "./EditorWindow.css"
import InventoryEntry from "./InventoryEntry.jsx";
import React, {useState} from 'react'
function CInventory(props) {

    const getScroll = () => {

        return( <>
            <InventoryEntry name="Frontal" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="Temporal" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="TMJ" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="Parietal" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="Occipital" numBoxes="1" submenu="Skull"/>
            <InventoryEntry name="Sphenoid" numBoxes="1" submenu="Skull"/>
            <InventoryEntry name="Zygomatic" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="Maxilla" numBoxes="2" submenu="Skull"/>
            <InventoryEntry name="Mandible" numBoxes="3" submenu="Skull"/>
            <InventoryEntry name="Teeth" type="num-input" labels={["#"]} numBoxes="1" submenu="Skull"/> 

        </>)
    }

    return(<div className = "inventory">
            <div className = "inventory-title">
                Inventory
            </div>
            <div className = "inventory-scroll">
                {getScroll()}
            </div>
        </div>);
}
export default CInventory