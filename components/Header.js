'use client';

import Image from 'next/image'
import logo from '../assets/logo_horizontal_branco.png'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react';
import { getSession, useSession } from 'next-auth/react';

export const Header = ({ props }) => {
    const [logged, setLogged] = useState(false)
    const session = getSession().then(res => {
        if (res) {
            console.log(res)
            setLogged(true)
        }
    })
    const pathname = usePathname();
    const router = useRouter();
    const navLink = [
        {
            nome: 'Página Inicial',
            link: '/'
        },
        {
            nome: 'Sobre',
            link: '/sobre'
        },
        {
            nome: 'Departamentos',
            link: '/departamentos'
        },
        {
            nome: 'Blog',
            link: '/blog'
        },
        {
            nome: 'Contactos',
            link: '/contactos'
        },
        {
            nome: 'Contribuir',
            link: '/contribuir'
        },
        {
            nome: 'Galeria',
            link: '/galeria'
        },
    ]

    return (
        <header className='header w-100'>
            <nav className="navbar navbar-expand-lg navbar-light bg-black d-flex p-3 justify-between">
                <Link className="navbar-brand" href="#"><Image src={logo} height={50}></Image></Link>
                <div className="container d-flex">
                    <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                navLink.map(({ nome, link }) => (
                                    <li className="nav-item" key={link}>
                                        <Link className={pathname == link ? 'nav-link active' : 'nav-link'} href={link}><span>{nome}</span></Link>
                                    </li>

                                ))
                            }
                            {
                                logged && (
                                    <li className="nav-item">
                                        <Link className={pathname == '/admin' ? 'nav-link active' : 'nav-link'} href={'/admin'}><span>Admin</span></Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-outline-danger' onClick={() => router.push('/login')}><span> Login </span></button>
                    </div>
                </div>
            </nav>
        </header>
    )

}