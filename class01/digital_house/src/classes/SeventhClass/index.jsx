import {Main} from "./style.js";
import {useState} from "react";

export function SeventhClass(props) {
    const [counter, setCounter] = useState(0);

    function addNumber() {
        setCounter(counter + 1)
    }

    return (
        <Main>
            <h1>Counter</h1>

            <button onClick={addNumber}>Add</button>
            <span>Current number: {counter}</span>
        </Main>
    )
}