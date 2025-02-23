import React, {useState, useContext} from 'react'
import { Context } from './FormContainer';

function BoneMenuForm(props) {
    const context = useContext(Context);
    const [focusSpecId, setFocusSpecId] = context.focusSpecId;
    const spec=focusSpecId;
    const [_, setRightPaneSubMenu] = context.rightPaneSubMenu;
    const handleBackArrowClick = () => {
        props.switchWindowFlag();
        setRightPaneSubMenu("Default");
    }
    const handleMenuClick = (e) => {
        if(e.target.value === "specInfo") {
            setRightPaneSubMenu("Specimen Info");
        }
        else if(e.target.value == "dentalInv") {
            setRightPaneSubMenu("Dental");
        }
        else if(e.target.value == "skeletalInv") {
            setRightPaneSubMenu("Skeletal");
        }
        else if (e.target.value == "taxonomy") {
            setRightPaneSubMenu("Taxonomy");
        }
    }
    return(<div className='indiv-form'>
        <button onClick={handleBackArrowClick}>&#171;</button>
        <h4>Specimen: {spec}</h4>
        <button className="menu-button" value="specInfo" onClick={handleMenuClick}>Edit Specimen Info</button>
        <button className="menu-button" value="dentalInv" onClick={handleMenuClick}>Dental Inventory</button>
        <button className="menu-button" value="skeletalInv" onClick={handleMenuClick}>Skeletal Inventory</button>
        <button className="menu-button" value="taxonomy" onClick={handleMenuClick}>Taxonomy</button>
        </div>);
}
export default BoneMenuForm