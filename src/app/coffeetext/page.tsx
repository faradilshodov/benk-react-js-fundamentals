"use client";

import { useEffect, useState } from "react";
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

interface ApiCoffeeResponseStructure {
    description: string;
    id: number;
    image: string;
    ingredients: Array<string>;
    title: string;
};

let lastName: string = "DILSHODOV";

const apiLink = "https://api.sampleapis.com/coffee/iced";

export default function CoffeeTextComponent(){

    const [data, setData] = useState<ApiCoffeeResponseStructure[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: Response = await fetch(apiLink);
                const responseJSON: Object[] = await response.json() as ApiCoffeeResponseStructure[];
                setData(responseJSON);
            } catch (error: unknown) {
                console.log(error);    
            };
        };

        fetchData();
    }, []);

    return (
        <>
            <MyRedParagraph>
                Coffee Text List Will Go Here
                <h1>FARA { lastName } HERE</h1>
            </MyRedParagraph>
            <ComponentTwo/>
            <ComponentThree propOne={lastName}/>
            <ComponentFour/>
            <br />
            {data?.map((coffee) => (
                <p key={coffee.id}>{coffee.title}</p>
            ))}
        </>
    );
};