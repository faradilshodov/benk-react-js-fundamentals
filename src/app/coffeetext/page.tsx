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

interface apiCoffeeResponseStructure {
    description: string,
    id: number,
    image: string,
    ingredients: Array<string>,
    title: string,
};

let lastName: string = "DILSHODOV";

const apiLink = "https://api.sampleapis.com/coffee/iced";

export default function CoffeeTextComponent({title}: apiCoffeeResponseStructure){

    const [data, setData] = useState<Object[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: Response = await fetch(apiLink);
                const responseJSON: Object[] = await response.json();
                // responseJSON.map((coffee) => {
                //     console.log(coffee.title);
                // });

                setData(responseJSON);
            } catch (error: any) {
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
                <p>{coffee.title}</p>
            ))}
        </>
    );
};