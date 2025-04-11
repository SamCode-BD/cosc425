import Left from "./Left"
import Right from "./Right"


export default function Home(){
    return(
        <div className="grid grid-cols-3 lg:grid-cols-5">
            <Left/>
            <Right/>
        </div>
    )
}