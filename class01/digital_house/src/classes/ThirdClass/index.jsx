import './style.scss'

export function ThirdClass() {
    const components = [
        {name: 'Card', description: 'Description', imgUrl: 'https://randomwordgenerator.com/img/picture-generator/57e8d24b4c53b10ff3d8992cc12c30771037dbf85254794e732879d1964a_640.jpg'},
        {name: 'Card 2', description: 'Description 2', imgUrl: 'https://randomwordgenerator.com/img/picture-generator/50e5d6474e5bb10ff3d8992cc12c30771037dbf85254784d712f7dd59245_640.jpg'},
    ]

    return (
        <section className={'third-class'}>
            <h1>Third Class</h1>
            <ul>
                {components.map(component =>
                    <li>
                        <img src={component.imgUrl}/>
                        <h1>{component.name}</h1>
                        <p>{component.description}</p>
                    </li>
                )}
            </ul>
        </section>
    )
}