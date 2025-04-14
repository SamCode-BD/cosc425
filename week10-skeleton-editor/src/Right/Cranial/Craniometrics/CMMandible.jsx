import MetricsListEntry from "/src/Right/Common/MetricsListEntry.jsx"
import {craniometrics_list} from "./craniometrics-list.jsx"
function CMMandible() {
    return(<div className="editor-scroll">
            {craniometrics_list.metrics_mandible.map((info, i) =>
        <MetricsListEntry type="cranium"
                          name={info.split("\t")[0]} 
                          landmarks={info.split("\t")[1]}
                          abbv={info.split("\t")[2]}
                          key={i}/>
        )}
        </div>)
}
export default CMMandible