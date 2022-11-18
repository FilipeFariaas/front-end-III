import './style.scss'

export function Class15Item(props) {

    // bairro:"Vila Progresso (Zona Leste)"
    // cep:"08041-510"
    // complemento:""
    // ddd:"11"
    // gia:"1004"
    // ibge:"3550308"
    // localidade:"São Paulo"
    // logradouro:"Rua Pascoal Tigano"
    // siafi:"7107"
    // uf:"SP"
    return(
        <div className="decima-quinta-aula-item">
            <h1>Nome do Endereço</h1>
            <address>Rua, Bairro - Cidade(Estado)</address>
            <small>Cep</small>
            <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
        </div>
    )

}