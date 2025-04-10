import MetricsListEntry from "./MetricsListEntry.jsx"
import {craniometrics_list} from "./craniometrics-list.jsx"
function CMCranium() {
    return(<div className = "editor-scroll">

        {craniometrics_list.metrics_cranium.map((info, i) =>
        <MetricsListEntry type="cranium"
                          name={info.split("\t")[0]} 
                          landmarks={info.split("\t")[1]}
                          abbv={info.split("\t")[2]}
                          key={i}/>
        )}

        </div>)
}
export default CMCranium