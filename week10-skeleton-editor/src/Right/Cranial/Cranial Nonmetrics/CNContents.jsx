import { cranial_nonmetrics_list } from "./cranial-nonmetrics-list";
import MetricsListEntry from "/src/Right/Common/MetricsListEntry";
export default function CNContents(props) {
    if(props.menu == "facial") {
        return(
            <div className="editor-scroll">
                {cranial_nonmetrics_list.facial.map((info, i) => 
                <MetricsListEntry type="cranial-nonmetrics"
                                name={info[0]}
                                dropdown={info[1]}
                                key={i}/>
                )}
            </div>
        )}
    else if(props.menu == "lateral") {
        return(
            <div className="editor-scroll">
                {cranial_nonmetrics_list.lateral.map((info, i) => 
                <MetricsListEntry type="cranial-nonmetrics"
                                name={info[0]}
                                dropdown={info[1]}
                                key={i}/>
                )}
            </div>
        )}
    else if(props.menu == "basilar") {
        return(
            <div className="editor-scroll">
                {cranial_nonmetrics_list.basilar.map((info, i) => 
                <MetricsListEntry type="cranial-nonmetrics"
                                name={info[0]}
                                dropdown={info[1]}
                                key={i}/>
                )}
            </div>
        )}
    else if(props.menu == "mandibular") {
        return(
            <div className="editor-scroll">
                {cranial_nonmetrics_list.mandibular.map((info, i) => 
                <MetricsListEntry type="cranial-nonmetrics"
                                name={info[0]}
                                dropdown={info[1]}
                                key={i}/>
                )}
            </div>
        )}
}