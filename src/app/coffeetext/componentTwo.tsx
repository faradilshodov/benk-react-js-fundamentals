export default function CoffeeTextComponent() {
    return <p>I am component two</p>
}

interface ComponentThreePropTypes {
    propOne: string
}

export function ComponentThree({propOne} : ComponentThreePropTypes) {
    return <p>I am component three ... received: {propOne}</p>
}

export function ComponentFour() {
    return <p>I am component four</p>
}