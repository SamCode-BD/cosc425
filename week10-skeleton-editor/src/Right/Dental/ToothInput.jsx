import "./DentalInventory.css"
import {tooth_layout} from "./tooth_layout.jsx"

export default function ToothInput(props) {
    

   
   

   let [x, y] = [,];
   let xcenter;
   let ycenter;
   
   if(props.dentition != "dec") {
      [x, y] = tooth_layout.perm[props.name];
      xcenter = 910;
      ycenter = 380;
   }
   else {
      [x, y] = tooth_layout.dec[props.name];
      xcenter = 915;
      ycenter = 380;
   }

   if(props.side == "R") {
    x *= -1;
   }

   x += xcenter;
   y += ycenter;

   
   if(props.inputType != "metrics") {
    return(<>
            <input className="tooth-input" style={{top: y + "px", left: x + "px"}}
                   onClick={()=> props.selectTooth(props.side + props.name)}/>
    </>)
   }
   else {
    x-= 5;
    y -= 5;
    return(<>
        <input type="radio" name="a3or8a9n348ng" className="tooth-input" style={{top: y + "px", left: x + "px"}}
               onChange={() => props.selectTooth(props.side + props.name)}/>
    </>)
   }
}