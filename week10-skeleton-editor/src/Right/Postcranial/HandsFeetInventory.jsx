import "/src/Right/Editor Window/EditorWindow.css"
import InventoryEntry from "../Common/InventoryEntry.jsx";
import React, {useState} from 'react'

function HandsFeetInventory() {

    let [activeSubmenu, setActiveSubmenu] = useState("Carpals");

    const getScroll = () => {
        if(activeSubmenu == "Carpals") {
            return(<>
                <InventoryEntry name="Scaphoid" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Lunate" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Triquetral" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Pisiform" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Greater Multa" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Lesser Multa" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Capitate" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Hamate" numBoxes="3" submenu="Carpals" menu="hf"/>
                <InventoryEntry name="Unidentifiable" type="num-input" labels={["#"]}numBoxes="1" submenu="Carpals" menu="hf"/>
            </>)
        }
        if(activeSubmenu == "Metacarpals") {
            let labels = ["L", "R", "#"];
            return(<>
                <InventoryEntry name="1" type="num-input" numBoxes="3" labels={labels} submenu="Metacarpals" menu="hf"/>
                <InventoryEntry name="2" type="num-input" numBoxes="3" labels={labels} submenu="Metacarpals" menu="hf"/>
                <InventoryEntry name="3" type="num-input" numBoxes="3" labels={labels} submenu="Metacarpals" menu="hf"/>
                <InventoryEntry name="4" type="num-input" numBoxes="3" labels={labels} submenu="Metacarpals" menu="hf"/>
                <InventoryEntry name="5" type="num-input" numBoxes="3" labels={labels} submenu="Metacarpals" menu="hf"/>
                <InventoryEntry name="Unidentifiable" type="num-input" labels={labels} numBoxes="3" submenu="Metacarpals" menu="hf"/>
            </>)
        }
        if(activeSubmenu == "Tarsals") {
            return(<>
                <InventoryEntry name="Calcaneus" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="Talus" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="Cuboid" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="1st Cuneiform" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="2nd Cuneiform" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="3rd Cuneiform" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="Navicular" numBoxes="3" submenu="Tarsals" menu="hf"/>
                <InventoryEntry name="Unidentifiable" type="num-input" labels={["#"]} numBoxes="1" submenu="Tarsals" menu="hf"/>
            </>)
        }
        if(activeSubmenu == "Metatarsals") {
            let labels = ["L", "R", "#"];
            return(<>
                <InventoryEntry name="1" type="num-input" numBoxes="3" labels={labels} submenu="Metatarsals" menu="hf"/>
                <InventoryEntry name="2" type="num-input"  numBoxes="3" labels={labels} submenu="Metatarsals" menu="hf"/>
                <InventoryEntry name="3" type="num-input"  numBoxes="3" labels={labels} submenu="Metatarsals" menu="hf"/>
                <InventoryEntry name="4" type="num-input"  numBoxes="3" labels={labels} submenu="Metatarsals" menu="hf"/>
                <InventoryEntry name="5" type="num-input"  numBoxes="3" labels={labels} submenu="Metatarsals" menu="hf"/>
                <InventoryEntry name="Unidentifiable" type="num-input" labels={labels}  numBoxes="3" submenu="Metatarsals" menu="hf"/>
            </>)
        }
        if(activeSubmenu == "Phalanges") {
            return(<>
                <p className="inventory-title">Hand Phalanges</p>
                <InventoryEntry name="Prox" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
                <InventoryEntry name="Middle" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
                <InventoryEntry name="Distal" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
                <p className="inventory-title">Foot Phalanges</p>
                <InventoryEntry name="Prox" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
                <InventoryEntry name="Middle" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
                <InventoryEntry name="Distal" type="num-input" labels={["L", "R", "?", "#"]} numBoxes="4" submenu="Hand Phalanges"/>
            </>)
        }
    }
    
    return(<div className = "inventory">
        <div className = "inventory-title">
            Hands and Feet Inventory
        </div>
        <div className = "inventory-buttons">
            <button onClick={() => {setActiveSubmenu("Carpals")}}>Carpals</button>
            <button onClick={() => {setActiveSubmenu("Metacarpals")}}>Metacarpals</button>
            <button onClick={() => {setActiveSubmenu("Tarsals")}}>Tarsals</button>
            <button onClick={() => {setActiveSubmenu("Metatarsals")}}>Metatarsals</button>
            <button onClick={() => {setActiveSubmenu("Phalanges")}}>Phalanges</button>

        </div>
        <div className = "inventory-scroll">
            {getScroll()}
        </div>
</div>)
}
export default HandsFeetInventory