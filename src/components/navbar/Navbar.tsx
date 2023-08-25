import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../../assets/svg';

const Navbar: FunctionComponent<{}> = () => {
    const { rimacLogo, phoneIcon } = Icons;
    return (
        <header className='bg-white py-4 px-8'>
            <nav className='max-w-screen-lg mx-auto flex justify-between items-center'>
                <Link to='/'>
                    <img src={rimacLogo} alt="Logo de Rimac" />
                </Link>
                <div className='text-gray-rimac flex justify-center gap-x-4 items-center text-sm font-semibold'>
                    <p className='hidden md:block'>!Compra por este medio!</p>
                    <div className='flex gap-x-1 text-base font-bold flex-row'>
                        <img src={phoneIcon} alt="icono" width="20" />
                        <span>(01) 411 6001</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar