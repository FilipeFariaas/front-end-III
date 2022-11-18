import {useEffect, useState} from 'react'
import { Class15Item } from '../class15Item'
import './style.scss'

export function Class15() {

    const [locations, setLocations] = useState([0])
    const [cep, setCep] = useState('')

    function searchCep(cepRecieved) {
        setCep(cepRecieved)
    }

    // useEffect(() => {
    //     fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
    //         (response) => {
    //             response.json().then(
    //                 address => {
    //                     console.log(address)
    //                     // setLocations([...locations, address])
    //                 }
    //             )
    //         }
    //     )
    // }, [cep])

    function addLocation(event) {
        event.preventDefault()

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
            (response) => {
                response.json().then(
                    address => {
                        console.log(address)
                        // setLocations([...locations, address])
                    }
                )
            }
        )

        setLocations([...locations, cep])
    }

    function deleteLocation(currentLocation) {
        const index = locations.indexOf(currentLocation);
        if (index > -1) { // only splice array when item is found
            locations.splice(index, 1); // 2nd parameter means remove one item only
        }

        setLocations([...locations])
    }

    return(

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label htmlFor="">Cep</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                </div>

                <button onClick={event => addLocation(event)}>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => {
                            console.log("LOCATION: " + location)
                            return (
                                <Class15Item
                                    key={index}
                                    data={location}
                                    onDeleteLocation={(currentLocation) => deleteLocation(currentLocation)}
                                />
                            )
                        }
                    )
                }

            </section>

        </div>

    )

}