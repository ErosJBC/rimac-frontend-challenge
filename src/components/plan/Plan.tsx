import { FunctionComponent } from 'react';
import { Icons } from '../../assets/svg';
import './Plan.scss';
import { Plan as IPlan } from '../../models';
import { useDispatch, useSelector } from 'react-redux';
import { setResumen } from '../../store/resumen';
import { useNavigate } from 'react-router-dom';

const Plan: FunctionComponent<{ plan: IPlan }> = ({ plan }) => {
    const { addUserLightIcon } = Icons;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, lastName, DNI, cellphone } = useSelector((state: any) => state.user);

    const handleClick: () => void = () => {
        dispatch(setResumen({ name, lastName, DNI, cellphone, plan: plan.name, price_plan: plan.price }) as unknown as any);
        navigate('/resumen');
    }

    return (
        <div className='rounded-2xl text-gray-rimac plan-shadow border border-gray-50 py-6 px-6 hover:cursor-pointer transition duration-300'>
            <div className='h-96'>
                <div className='grid grid-cols-12 mt-8 mb-6'>
                    <div className='font-semibold text-gray-rimac col-span-9'>
                        <h2 className='text-lg mb-6'>{plan.name}</h2>
                        <p className='text-xs text-neutral-rimac uppercase mb-0.5'>Costo del plan</p>
                        <p className=''>${plan.price} al mes</p>
                    </div>
                    <div className='col-span-3'>
                        <img src={addUserLightIcon} alt="icono" />
                    </div>
                </div>
                <hr />
                <div className='mt-6'>
                    <ul className='list-item list-disc ml-6 text-sm'>
                        {plan.description.map((desc: string, index: number) => (
                            <li className='mb-6' key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-8 mb-2'>
                <button type='button' onClick={handleClick} className='rounded-full w-full text-white bg-rose-rimac hover:bg-rose-700 transition duration-300 px-6 py-2 text-sm'>Seleccionar Plan</button>
            </div>
        </div>
    )
}

export default Plan;
