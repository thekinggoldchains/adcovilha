'use client';
import Image from 'next/image';
import banner from '../../assets/imagens/1_cut.jpg'
import logo from '../../assets/logo_branco.png'
import logoPreto from '../../assets/logo_preto.png'
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const login = async () => {
        signIn('credentials', { email, password, redirect: true, callbackUrl: '/admin' })
        .then(res => {
            router.push('/admin')
        })
        .catch(err => {
            setError(true)
        })
        
    }

    useEffect(() => {
        var url = window.location.href;
        if(url.includes('error')) {
            setError(true)
        }

    }, [])

    return (
        <div className='banner-home d-flex position-relative'>
            <Image src={banner} alt='bannerADCovilhã' className='banner-img' />


            <div className='w-100 h-100 position-absolute d-flex flex-column justify-content-center align-items-center'>
                <div className='col-md-4 card-login d-flex flex-column justify-content-center align-items-center'>
                    <Image src={logoPreto} alt='logoADCovilhã' width={100} />
                    <hr className="border border-danger w-75 border-2"></hr>

                    <div className='w-75 mt-5 mb-3'>
                        <label className='label-form' htmlFor='email'>Email</label>
                        <input id='email' type='email' className={error ? 'is-invalid form-control' : 'form-control'}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className='w-75 mb-2'>
                        <label className='label-form' htmlFor='senha'>Senha</label>
                        <input id='senha' type='password' className={error ? 'is-invalid form-control' : 'form-control'}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div hidden={!error}>
                        <em className='text-danger'>Usuário ou senha inválidos.</em>
                    </div>
                    <button type="button" className="btn btn-danger w-50 mt-4"
                        onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}