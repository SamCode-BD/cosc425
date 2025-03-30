import ButtonContainer from "./ButtonContainer"

function Toolbar(props) {
    return(
        <div className = "toolbar">
            <ButtonContainer toolbarSubContext={props.toolbarSubContext} setTaphonomyActive={props.setTaphonomyActive}/>
        </div>
    )
}
export default Toolbar