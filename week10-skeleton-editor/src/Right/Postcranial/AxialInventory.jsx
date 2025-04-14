import "/src/Right/Editor Window/EditorWindow.css"
import InventoryEntry from "../Common/InventoryEntry.jsx";
import React, {useState} from 'react'


function AxialInventory(props) {

    let [activeSubmenu, setActiveSubmenu] = useState("vertebrae");

    const getScroll = () => {
        if(activeSubmenu == "vertebrae") {
            return(<>
            <InventoryEntry name="C1" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="C2" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="C7" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="C3-C6" type="option" options={[[0, 1, 2, 3, 4], [0, 1, 2, 3, 4]]} submenu="Vertebrae"/>
            <InventoryEntry name="T1-T9" type="option" options={[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]} submenu="Vertebrae"/>
            <InventoryEntry name="T10" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="T11" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="T12" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="L1" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="L2" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="L3" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="L4" numBoxes="2" submenu="Vertebrae"/>
            <InventoryEntry name="L5" numBoxes="2" submenu="Vertebrae"/>
            <div className = "inventory-title">
                Unidentifiable Vertebrae
            </div>
            <InventoryEntry name="Thoracic" type="num-input" numBoxes="1" labels={["#"]}submenu="Vertebrae"/>
            <InventoryEntry name="Lumbar" type="num-input" numBoxes="1" labels={["#"]}submenu="Vertebrae"/>
            </>);
        }
        else if(activeSubmenu == "ribs") {
            return(<>
            <InventoryEntry name="R1" numBoxes="2" submenu="Ribs"/>
            <InventoryEntry name="R2" numBoxes="2" submenu="Ribs"/>
            <InventoryEntry name="R3-R10" type="option" options={[[0, 1, 2, 3, 4, 5, 6, 7, 8], [0, 1, 2, 3, 4, 5, 6, 7, 8]]} submenu="Ribs"/>
            <InventoryEntry name="R11" numBoxes="2" submenu="Ribs"/>
            <InventoryEntry name="R12" numBoxes="2" submenu="Ribs"/>
            </>)
        }
        else if(activeSubmenu == "axial-general") {
            return(<>
                <InventoryEntry name="Sacrum" numBoxes="1" submenu="axial-general"/>
                <InventoryEntry name="Coccyx" numBoxes="1" submenu="axial-general"/>
                <InventoryEntry name="Illium" numBoxes="2" submenu="axial-general"/>
                <InventoryEntry name="Ischium" numBoxes="2" submenu="axial-general"/>
                <InventoryEntry name="Pubis" numBoxes="2" submenu="axial-general"/>
                <InventoryEntry name="Acetabulum" numBoxes="2" submenu="axial-general"/>
                <InventoryEntry name="Auricular Surf" numBoxes="2" submenu="axial-general"/>
                </> )
        }
        else if(activeSubmenu == "hyoid") {
            return(
            <InventoryEntry name="Hyoid" numBoxes="3" submenu="Hyoid"/>
        )}
    }

    return(<div className = "inventory">
            <div className = "inventory-title">
                Axial Inventory
            </div>
            <div className = "inventory-buttons">
                <button onClick={() => {setActiveSubmenu("vertebrae")}}>Vertebrae</button>
                <button onClick={() => {setActiveSubmenu("ribs")}}>Ribs</button>
                <button onClick={() => {setActiveSubmenu("axial-general")}}>General</button>
                <button onClick={() => {setActiveSubmenu("hyoid")}}>Hyoid</button>
            </div>
            <div className = "inventory-scroll">
                {getScroll()}
            </div>
    </div>)
}
export default AxialInventory