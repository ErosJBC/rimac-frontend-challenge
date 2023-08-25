import { FunctionComponent } from 'react';
import { Icons } from '../../assets/svg';
import './Resumen.scss';
import { useSelector } from 'react-redux';

const Resumen: FunctionComponent<{}> = () => {
    const { familyIcon } = Icons;
    const { name, lastName, DNI, cellphone, plan, price_plan} = useSelector((state: any) => state.resumen)

    return (
        <div className='max-w-4xl mx-auto min-h-screen mt-10 text-gray-rimac px-8'>
            <h2 className='text-3xl font-semibold mb-10'>Resumen del seguro</h2>
            <div className='rounded-3xl card-shadow border border-gray-50 py-6 px-8 hover:cursor-pointer transition duration-300'>
                <p className='font-semibold uppercase text-xs mb-3'>Precios calculados para:</p>
                <div className='flex gap-x-2 font-bold mb-4'>
                    <img src={familyIcon} alt="icono" width="20" />
                    <span className='text-base'>{`${name || 'Sin nombre'} ${lastName || ''}`}</span>
                </div>
                <hr />
                <div className='mt-4'>
                    <p className='font-semibold'>Responsable de pago</p>
                    <p>DNI: {DNI || '00000000'}</p>
                    <p>Celular: {cellphone || '999999999'}</p>
                </div>
                <div className='mt-4'>
                    <p className='font-semibold'>Plan elegido</p>
                    <p>{plan || 'Sin plan'}</p>
                    <p>Costo del plan: ${price_plan || 0} al mes</p>
                </div>
            </div>
        </div>
    )
}

export default Resumen;
