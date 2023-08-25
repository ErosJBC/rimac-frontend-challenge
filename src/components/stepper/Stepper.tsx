import React, { FunctionComponent } from 'react';
import { Icons } from '../../assets/svg';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../store/stepper';
import { useNavigate } from 'react-router-dom';

const Stepper: FunctionComponent<{}> = () => {
    const { returnIcon } = Icons;
    const { step } = useSelector((state: any) => state.stepper);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickReturn: () => void = () => {
        dispatch(setStep({ step: step === 1 ? 1 : step - 1, active: true, path: step === 2 ? '/planes' : '' }) as unknown as any);
        navigate(step === 2 ? '/planes' : '');
    }
    return (
        <>
            <div className='bg-neutral-rimac-soft py-6 flex justify-center mt-16 items-center'>
                <div className='flex flex-row gap-x-3'>
                    <span className={`flex items-center justify-center text-sm w-6 h-6 ${step === 1 ? 'bg-blue-berry-rimac text-neutral-rimac-light' : 'border border-neutral-rimac text-neutral-rimac'} rounded-full`}>1</span>
                    <span className={`${step === 1 ? 'text-gray-rimac' : 'text-neutral-rimac'} font-semibold`}>Planes y Coberturas</span>
                </div>
                <div className='flex items-center justify-center mx-4'>
                    <span className='flex border-2 border-b-0 border-x-0 border-dashed w-10 h-1 mt-1 border-blue-berry-rimac'></span>
                </div>
                <div className='flex flex-row gap-x-3'>
                    <span className={`flex items-center justify-center text-sm w-6 h-6 ${step === 2 ? 'bg-blue-berry-rimac text-neutral-rimac-light' : 'border border-neutral-rimac text-neutral-rimac'} rounded-full`}>2</span>
                    <span className={`${step === 2 ? 'text-gray-rimac' : 'text-neutral-rimac'} font-semibold`}>Resumen</span>
                </div>
            </div>
            <div className='max-w-4xl mt-10 mx-auto px-8'>
                <div onClick={handleClickReturn} className='cursor-pointer flex text-blue-berry-rimac font-semibold gap-x-2'>
                    <img src={returnIcon} alt="icono" />
                    <span>Volver</span>
                </div>
            </div>
        </>
    )
}

export default Stepper