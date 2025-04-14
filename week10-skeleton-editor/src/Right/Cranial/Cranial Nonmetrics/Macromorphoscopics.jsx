import React, {useState} from 'react'
import VerticalRadioButton from '/src/Right/Common/VerticalRadioButton';
import HorizontalRadioButton from '/src/Right/Common/HorizontalRadioButton';
import {mms_list} from "./macromorphoscopics-list"
import "/src/Right/Editor Window/EditorWindow.css"
//trait selection on the side stays the same
//comments, group of images, group of descriptions, # of radio buttons - map to array

const getImage = (trait, code) => {
    if(trait != null && code != null) {

        return mms_list.dict[trait][2] != null && mms_list.dict[trait][2][code];
    }
}

function Macromorphoscopics() {
    let [trait, selectTrait] = useState("Anterior Nasal Spine");
    let [code, selectCode] = useState(1);
    
    const getRadioButtons = (codes) => {
        if(codes != null) {
            return(codes.map((number, i) => 
                <VerticalRadioButton key={number} name={number} 
                                     selectCode={() => {selectCode(i)}}/>));
        }
        else {
            return(<></>)
        }
    }


    return(<div className = "mms-contents">
        <div className="mms-left">
            <div className="mms-trait-list">
                {Object.keys(mms_list.dict).map((traitName, i) => <HorizontalRadioButton name={traitName} selectValue={() => {selectTrait(traitName); selectCode(0);}}/>)}
            </div>
            <div className="mms-trait-desc">
                <textarea readOnly style={{resize: "none"}} value={mms_list.trait_desc[mms_list.dict[trait][0]]}/>
            </div>
        </div>
        <div className="mms-right">
            <img className="mms-image" src={getImage(trait, code)}/>
            <div className="mms-code">
                {getRadioButtons(mms_list.dict[trait][1])}
            </div>
            <textarea readOnly className="mms-code-desc" value={(mms_list.code_desc[mms_list.dict[trait][0]] != null)
                                                              && mms_list.code_desc[mms_list.dict[trait][0]][code]}
                                                              style={{resize: "none"}}/>
        </div>
    </div>)
}
export default Macromorphoscopics