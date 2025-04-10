import "./TaxLocWindow.css"
import TaxonomyInputs from "./TaxonomyInputs.jsx"
import LocalityInputs from "./LocalityInputs.jsx"

function TaxLocWindow(props) {
    return(
    <div className="taxonomy-locality-grid">
        <div className="top-bar">
            <button onClick={() => props.setModal(false)}>X</button>
        </div>
        <div className="lower-half">
            <div></div>
            <div className="taxonomy">
                <p className="editor-title">Taxonomy</p>
                <button>{"Is Human? (Autofill)"}</button>
                <TaxonomyInputs/>
            </div>
            <div className="locality">
                <p className="editor-title">Locality</p>
                <button>{"From SUB? (Autofill)"}</button>
                <LocalityInputs/>
                <button onClick={() => props.setModal(false)}>Save</button>
            </div>
            <div></div>
        </div>
    </div>)
}
export default TaxLocWindow