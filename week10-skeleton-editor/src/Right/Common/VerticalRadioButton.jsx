import "/src/Right/Editor Window/EditorWindow.css"
export default function VerticalRadioButton(props) {
    return(<div className="vertical-radio-button">
        <input type="radio" value={props.name} onChange={props.selectCode}name="some random name so that it sees they all have they same name so they're in a group"/>
        <label>{props.name}</label>
    </div>)
}