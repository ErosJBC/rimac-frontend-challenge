import { FunctionComponent } from 'react';
import { Icons } from '../../assets/svg';

const Footer: FunctionComponent<{}> = () => {
    const { rimacLogoWhite } = Icons;
    return (
        <footer className='bg-gray-rimac text-white text-xs p-8'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <img src={rimacLogoWhite} alt="Logo de Rimac" />
                    <hr className='block md:hidden my-5 w-full' />
                    <span>&copy;2023 RIMAC Seguros y Reaseguros</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer