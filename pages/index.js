import Image from 'next/image';
import banner from '../assets/imagens/1_cut.jpg'
import logo from '../assets/logo_branco.png'

export default function Home() {
  return (
    <div className='banner-home d-flex position-relative'>
      <Image src={banner} alt='bannerADCovilhã' className='banner-img' />
      <div className='texto-banner position-absolute w-100 d-flex flex-column justify-content-center align-items-center'>
        <Image src={logo} alt='logoADCovilhã' className='logo-img' />
        <hr className="hr-banner border border-danger border-2 opacity-50"></hr>
        <span>UM LUGAR PARA TODOS</span>
        <button type="button" class="btn btn-danger btn-lg mt-3">Saber Mais</button>
      </div>
    </div>
  );
}
