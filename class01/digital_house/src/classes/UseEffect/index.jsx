import {useEffect, useState} from "react";
import {Section} from "./style.js";

export function UseEffect() {
    const [users, setUsers] = useState([])

    const getUserData = async () => {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/users')
            const userData = await response.json()
            setUsers(userData)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUserData()
        console.log("Mount")
        return () => console.log("Dismount")
    }, [])

    return (
        <Section>
            <h1>USE EFFECT</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                {
                    users.length > 0 &&
                    users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </Section>
    )
}