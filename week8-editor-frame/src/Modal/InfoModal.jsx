import React, {useState} from 'react'
import "./InfoModal.css"

export default function InfoModal(props) {

    const [modal, setModal] = useState(false);
    return(<>
    <button onClick={() => setModal(!modal)}
            className="open-modal">Info</button>

    {modal && (
    <div className="modal">
        <div className="overlay"></div>
            <div className="modal-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button className="close-modal"
                onClick={() => setModal(!modal)}>Close</button>
        </div>
        
    </div>)}
    </>)
}