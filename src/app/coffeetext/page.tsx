import ComponentTwo from "./componentTwo";
import { ComponentThree, ComponentFour } from "./componentTwo";

export default function CoffeeTextComponent(){
    return (
        <>
            <p>Coffee Text List Will Go Here</p>
            <ComponentTwo/>
            <ComponentThree/>
            <ComponentFour/>
        </>
    )
}