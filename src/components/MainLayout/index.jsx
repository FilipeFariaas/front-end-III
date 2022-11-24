import { Link, Outlet } from 'react-router-dom'

import './style.scss'
import {useEffect} from "react";

export function MainLayout() {

    return (
        <div className="main-layout-component">

            <header className='main-layout-component-header'>

                <h1>Front End III</h1>

            </header>

            <main>

                <aside>

                    <ul>

                        <h2>Aulas</h2>

                        <li>

                            <Link to="terceira-aula">Terceira Aula</Link>

                        </li>
                        <li>

                            <Link to="quinta-aula">Quinta Aula</Link>

                        </li>
                        <li>

                            <Link to="setima-aula">Sétima Aula</Link>

                        </li>
                        <li>

                            <Link to="decima-quarta-aula">Decima Quarta Aula</Link>

                        </li>

                        <li>

                            <Link className="selected" to="decima-quinta-aula">Decima Quinta Aula</Link>

                        </li>

                    </ul>

                </aside>

                <section className='main-layout-component-main'>

                    <Link to="">Fechar</Link>

                    <Outlet />

                </section>

            </main>

        </div>
    )

}