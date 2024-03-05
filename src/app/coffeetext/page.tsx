"use client"

import ComponentTwo from "./componentTwo";
import { ComponentThree, ComponentFour } from "./componentTwo";
import styled from "styled-components";

const MyRedParagraph = styled.p`
    color: red;

    h1 {
        color: blue;
        font-family: Arial;
    }
`;

let lastName: string = "DILSHODOV"

export default function CoffeeTextComponent(){
    return (
        <>
            <MyRedParagraph>
                Coffee Text List Will Go Here
                <h1>FARA { lastName } HERE</h1>
            </MyRedParagraph>
            <ComponentTwo/>
            <ComponentThree propOne={lastName}/>
            <ComponentFour/>
        </>
    );
};