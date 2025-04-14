import "/src/Right/Editor Window/EditorWindow.css"
import InventoryEntry from "../Common/InventoryEntry.jsx";
import React, {useState} from 'react'
function AppendicularInventory(props) {

    let [activeSubmenu, setActiveSubmenu] = useState("general");

    const getScroll = () => {
        if(activeSubmenu == "general") {
            return(<>
                <InventoryEntry name="Humerus" numBoxes="10" submenu="app-general"/>
                <InventoryEntry name="Radius" numBoxes="10" submenu="app-general"/>
                <InventoryEntry name="Ulna" numBoxes="10" submenu="app-general"/>
                <InventoryEntry name="Femur" numBoxes="10" submenu="app-general"/>
                <InventoryEntry name="Patella" numBoxes="2" submenu="app-general"/>
                <InventoryEntry name="Tibia" numBoxes="10" submenu="app-general"/>
                <InventoryEntry name="Fibula" numBoxes="10" submenu="app-general"/>
            </>)
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
            <button onClick={() => {setActiveSubmenu("general")}}>General</button>
            <button onClick={() => {setActiveSubmenu("shoulder")}}>Shoulder</button>
            <button onClick={() => {setActiveSubmenu("sternum")}}>Sternum</button>
        </div>
        <div className = "inventory-scroll">
            {getScroll()}
        </div>
</div>)
}
export default AppendicularInventory