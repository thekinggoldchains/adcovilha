import Image from 'next/image'
import logo from '../assets/logo_branco.png'

export const Footer = () => {
    return (
        <footer className='bg-black p-4 justify-content-center align-items-center d-flex flex-column'>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={logo} alt="Logo" width={100} height={100} className='img-fluid mb-4' />
            </a>
            <span className='text-white'> Todos Os Direitos Reservados. 2023</span>
        </footer>
    )
}