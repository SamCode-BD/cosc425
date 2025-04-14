import "/src/Right/Editor Window/EditorWindow.css"
import MetricsListEntry from "../Common/MetricsListEntry"
import { postcranial_metrics_list } from "./postcranial-metrics-list"
function PostcranialMetrics() {
    return(
    <div className="editor-window">
        <p className = "editor-title">Postcranial Metrics</p>
        <div className="editor-scroll">
            {postcranial_metrics_list.map((info, i) => 
            <MetricsListEntry type="postcranium"
                              bone={info.split("\t")[0]}
                              metric={info.split("\t")[1]}
                              text={info.split("\t")[2].split("(Figure")[0]}/>)}
        </div>
    </div>)
}
export default PostcranialMetrics