import {Login} from "./pages/Login/index.jsx";
import {SecondClass} from "./classes/SecondClass";
import {ThirdClass} from "./classes/ThirdClass";
import {useEffect, useState} from "react";
import {FourthClass} from "./classes/FourthClass";
import {FifthClassItem} from "./components/FifthClassItem";
import {SeventhClass} from "./classes/SeventhClass";
import {UseEffect} from "./classes/UseEffect";
import {Class15} from "./classes/class15/index.jsx";

function App() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            {/*<Login />*/}
            {/*<SecondClass />*/}
            {/*<ThirdClass />*/}
            {/*<FourthClass />*/}
            {/*<FifthClassItem />*/}
            {/*<SeventhClass />*/}
            {/*{toggle && <UseEffect />}*/}
            {/*<button onClick={() => setToggle(!toggle)}>{toggle ? "Hide " : "Show "}Text</button>*/}
            {<Class15 />}
        </>
    )
}

export default App
