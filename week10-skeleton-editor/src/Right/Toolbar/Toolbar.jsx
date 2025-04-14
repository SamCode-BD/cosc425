import ButtonContainer from "./ButtonContainer"

function Toolbar(props) {
    return(
        <div className = "toolbar">
            <ButtonContainer editorWindowContext={props.editorWindowContext} setTaphonomyActive={props.setTaphonomyActive}/>
        </div>
    )
}
export default Toolbar