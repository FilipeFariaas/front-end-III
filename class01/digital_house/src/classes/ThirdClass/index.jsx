import './style.scss'
import {FifthClassItem} from "../../components/FifthClassItem";

export function ThirdClass() {
    const components = [
        {id: 1, name: 'Card', description: 'Description', imgUrl: 'https://randomwordgenerator.com/img/picture-generator/57e8d24b4c53b10ff3d8992cc12c30771037dbf85254794e732879d1964a_640.jpg'},
        {id: 2, name: 'Card 2', description: 'Description 2', imgUrl: 'https://randomwordgenerator.com/img/picture-generator/50e5d6474e5bb10ff3d8992cc12c30771037dbf85254784d712f7dd59245_640.jpg'},
    ]

    return (
        <section className={'third-class'}>
            <h1>Third Class!</h1>
            <ul>
                {components.map((component) =>
                    <FifthClassItem data={component}/>
                )}
            </ul>
        </section>
    )
}