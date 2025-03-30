import "./EditorWindow.css"
import InventoryEntry from "./InventoryEntry.jsx";
import React, {useState} from 'react'
function AppendicularInventory(props) {

    let [activeSubmenu, setActiveSubmenu] = useState("other");

    const getScroll = () => {
        if(activeSubmenu == "other") {
            return(<></>)
        }
        else if(activeSubmenu == "shoulder") {
            return(<>
                <InventoryEntry name="Clavicle" numBoxes="2" submenu="Shoulder"/>
                <InventoryEntry name="Scapula" numBoxes="2" submenu="Shoulder"/>
            </>)
        }
        else if(activeSubmenu == "sternum") {
            return(<>
                <InventoryEntry name="Manubrium" numBoxes="1" submenu="Sternum"/>
                <InventoryEntry name="Body" numBoxes="1" submenu="Sternum"/>
                <InventoryEntry name="Xiphoid" numBoxes="1" submenu="Sternum"/>
            </>)
        }
    }

    return(<div className = "inventory">
        <div className = "inventory-title">
            Appendicular Inventory
        </div>
        <div className = "inventory-buttons">
            <button onClick={() => {setActiveSubmenu("other")}}>Other</button>
            <button onClick={() => {setActiveSubmenu("shoulder")}}>Shoulder</button>
            <button onClick={() => {setActiveSubmenu("sternum")}}>Sternum</button>
        </div>
        <div className = "inventory-scroll">
            {getScroll()}
        </div>
</div>)
}
export default AppendicularInventory