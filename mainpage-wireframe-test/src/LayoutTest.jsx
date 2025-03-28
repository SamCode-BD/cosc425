import "./LayoutTest.css"
/*....*/
function LayoutTest() {
    return(
        <div className="container">
            <div className="item item-1">
                <h2 className="sidebar-header">Skeletal</h2>
                <button className="sidebar-button">Skeletal Inventory</button>
            </div>
            <div className="item item-2">
                <div className="center-window-header">Specimen Identification</div>
                <div className="subitem item-2b">
                    <div className="subitem item-2b-line">
                        <p className="item-2b-text">Museum</p>
                        <input className="item-2b-input"/>
                    </div>
                    <div className="subitem item-2b-line">
                        <p className="item-2b-text">Spec. #</p>
                        <input className="item-2b-input"/>
                    </div>
                    <div className="subitem item-2b-line">
                        <p className="item-2b-text">Spec</p>
                        <input className="item-2b-input"/>
                    </div>
                    <div className="subitem item-2b-line">
                        <p className="item-2b-text">Individual</p>
                        <select className="item-2b-input"/>
                    </div>
                    <div className="subitem item-2b-line">
                        <p className="item-2b-text">Sex</p>
                        <select className="item-2b-input"/>
                    </div>
                </div>
                <div className="item-2c">
                    <button className="item-2c-button">Save Info</button>
                </div>
            </div>
            <div className="item item-3">
                <h2 className="sidebar-header">Dental</h2>
                <button className="sidebar-button">Dental Inventory</button>
            </div>
            <div className="item-4">
                <button className="item-4a">Taxonomy</button>
                <button className="item-4b">Locality</button>
            </div>
        </div>
    );
}
export default LayoutTest