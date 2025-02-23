import IndivForm from './IndivForm.jsx'
import BoneMenuForm from './BoneMenuForm.jsx'
import React, {useState} from 'react'

function LeftPane() {
    let [indivActiveFlag, setIndivActiveFlag] = useState(true);
    return(indivActiveFlag?<IndivForm switchWindowFlag={() => setIndivActiveFlag(false)}/>
        :<BoneMenuForm switchWindowFlag={() => setIndivActiveFlag(true)}/>)
}
export default LeftPane