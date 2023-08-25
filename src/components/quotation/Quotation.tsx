import { FunctionComponent } from 'react';
import { Icons } from '../../assets/svg';
import './Quotation.scss';

const Quotation: FunctionComponent<any> = ({ icon, title, description, selected, onClick }: any) => {
    const { radioCheckOnIcon } = Icons;

    return (
        <div onClick={onClick} className={`rounded-2xl ${selected ? 'border-2 border-gray-rimac' : null} text-gray-rimac quotation-shadow border border-gray-50 py-6 px-6 hover:cursor-pointer transition duration-300`}>
            <div className='flex items-center justify-end pb-1'>
                {!selected ? <span className='w-6 h-6 rounded-full text-blue-600 border border-gray-300 focus:ring-blue-500' /> :
                    <img src={radioCheckOnIcon} alt="icono" />
                }
            </div>
            <div className='flex flex-row md:flex-col md:items-start items-center gap-x-2'>
                <img src={icon} alt={icon} className='mb-3 w-7 md:w-12' />
                <p className='font-semibold text-lg mb-3'>{title}</p>
            </div>
            <p className='text-sm mb-5'>{description}</p>
        </div>
    )
}

export default Quotation;
