import "./EditorWindow.css"
function TCheckbox(props) {
    return(<div className="taphonomy-contents-entry">
        <input type="checkbox"/>
        <label>{props.name}</label>
    </div>)
}
export default TCheckbox