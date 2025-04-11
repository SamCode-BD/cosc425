import "./Left.css"
import { Button } from "@/components/ui/button"
import "../globals.css"
import { Input } from "@/components/ui/input"

function Field(){
return (
    <div className = "field flex flex-col w-2/3 space-y-5 m-auto">
        
        <div className="flex items-center justify-center space-x-2">
            <p>ID: </p>
            <Input className="h-[40px] w-full max-w-sm"></Input>
        </div>

        <div className="flex items-center justify-center space-x-2">
            <p>Museum: </p>
            <Input className="h-[40px] w-full max-w-sm"></Input>
        </div>

        <div className="flex items-center justify-center space-x-2">
            <p>Sex: </p>
            <Input className="h-[40px] w-full max-w-sm"></Input>
        </div>

        <div className="flex items-center justify-center space-x-2">
            <p>User: </p>
            <Input className="h-[40px] w-full max-w-sm"></Input>
        </div>
    </div>

)
} export default Field