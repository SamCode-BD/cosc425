import { Ghost } from "lucide-react";
import "./Left.css"
import { Button } from "@/components/ui/button"
import "../globals.css"
import { Input } from "@/components/ui/input"
import  Field  from "./fields"
function Left() {
    return(
    <div className = "left h-screen">

        <div className = "exit-button">
            <button className = "w-4/5 h-full bg-primary font-medium text-primary-foreground shadow-xs hover:bg-primary/90">
            <h3>Exit</h3></button>
        </div>
        
        <div className = "title"><h2 className = "-mt-4 text-center font-bold">Bone Name</h2></div>

        <Field>

        </Field>

        <div className="tax-button flex flex-col space-y-4 w-full max-w-md mx-auto p-4">
            <Button
                variant="outline"
                size="lg"
                className="h-16 w-full text-base sm:text-lg md:text-xl font-medium transition-all duration-200"
            >
                Taxonomy
            </Button>

            <Button
                variant="outline"
                size="lg"
                className="h-16 w-full text-base sm:text-lg md:text-xl font-medium transition-all duration-200"
            >
                Locality
            </Button>
        </div>

        <div className = "save-button flex w-full max-w-md mx-auto p-4">
            <Button
            variant="outline"
            size="lg"
            className="h-16 w-full text-base sm:text-lg md:text-xl font-medium transition-all duration-200"
            >
                Save
            </Button>
        </div>
    </div>);
}
export default Left