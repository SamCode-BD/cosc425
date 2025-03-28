import "./Header.css"
import su_logo from "./assets/SU_Logo_color.png"

function Header() {
    return(<div className="header">
        <img className="logo" src={su_logo} alt="SU logo"></img>
        <h2 className="title">Bone Identification</h2>
        <img className="logo" src={su_logo} alt="SU logo"></img>
    
    </div>);
}

export default Header