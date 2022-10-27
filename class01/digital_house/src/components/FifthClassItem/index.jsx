export function FifthClassItem(props) {
    console.log(props)
    const {data} = {...props}

    return (
        <li key={data.id}>
            <img src={data.imgUrl}/>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </li>
    )
}