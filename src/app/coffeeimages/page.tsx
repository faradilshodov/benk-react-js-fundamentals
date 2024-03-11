"use client"

import { useEffect, useState } from "react";
import styled from "styled-components";

interface Coffee {
    description: string;
    id: number;
    image: string;
    title: string;
}

const ImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
`;

const CoffeeImage = styled.img`
    width: 300px;
    height: 400px;
    margin-bottom: 20px; /* Space out images */
`;

const apiLink = "https://api.sampleapis.com/coffee/iced";

export default function CoffeeImageComponent() {
    const [data, setData] = useState<Coffee[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiLink);
                const responseJSON = await response.json();                
                setData(responseJSON);
            } catch (error: unknown) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Coffee Images Will Go Here</h2>
            <ImagesContainer>
                {data.map((coffee) => (
                    <div key={coffee.id}> 
                        <h3>{coffee.title}</h3>
                        <CoffeeImage src={coffee.image} alt={`Coffee ${coffee.id}`} />
                    </div>
                ))}
            </ImagesContainer>
        </>
    );
}
