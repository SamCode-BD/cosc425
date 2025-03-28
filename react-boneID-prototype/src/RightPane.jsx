import RightPaneDefault from './RightPaneDefault.jsx'
import EditSpecimenInfo from './EditSpecimenInfo.jsx';
import EditTaxonomy from './EditTaxonomy.jsx'
import EditDental from './EditDental.jsx'
import EditSkeletal from './EditSkeletal.jsx';
import React, {useContext} from 'react'
import { Context } from './FormContainer';

function RightPane() {
    const context = useContext(Context);
    const [subMenu, _] = context.rightPaneSubMenu;
    if(subMenu === "Specimen Info") {return(<EditSpecimenInfo/>)}
    else if(subMenu === "Taxonomy") {return(<EditTaxonomy/>)}
    else if(subMenu === "Dental") {return(<EditDental/>)}
    else if(subMenu === "Skeletal") {return(<EditSkeletal/>)}
    else if(subMenu === "Default") {return(<RightPaneDefault/>)}
    else {return(<RightPaneDefault/>)}
}
export default RightPane