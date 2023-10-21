
import Image from 'next/image'
import logo from '../assets/logo_horizontal_branco.png'
import Link from 'next/link'
export const Header = () => {
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
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Página Inicial</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Sobre</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Departamentos</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Blog</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Contactos</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Contribuir</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><span>Galeria</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-outline-danger'><span> Login </span></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}