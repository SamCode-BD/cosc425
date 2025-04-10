import "./InfoModal.css"
import TaxLocWindow from "./TaxLocWindow.jsx"
import React, {useState} from 'react'

function TaxLocModal(props) {
    const [modal, setModal] = useState(false);

    return(<><button onClick={() => setModal(!modal)} className="open-modal">Taxonomy/Locality</button>
        {modal && (<div className="modal">
        <div className="overlay"></div>
            <div className="modal-content">
            <TaxLocWindow setModal={setModal}/>
            </div>
        </div>)}


    </>)
}
export default TaxLocModal