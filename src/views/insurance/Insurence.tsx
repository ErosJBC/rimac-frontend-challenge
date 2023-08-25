import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PATH_USER } from '../../constants';
import sloganImage from '../../assets/img/slogan.png';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user';
import { useNavigate } from 'react-router-dom';

const Insurence: FunctionComponent<{}> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            identity: '',
            cellphone: '',
            privacy: false,
            comercial: false
        },
        validationSchema: Yup.object({
            identity: Yup.string().required('Nro. de documento es obligatorio *').length(8, 'Debe tener 8 dígitos'),
            cellphone: Yup.string().required('Celular es obligatorio *').length(9, 'Debe tener 9 dígitos'),
            privacy: Yup.boolean().oneOf([true], 'Debe aceptar Política de Privacidad *'),
            comercial: Yup.boolean().oneOf([true], 'Debe aceptar Política Comunicaciones Comerciales *'),
        }),
        onSubmit: async values => {
            try {
                await dispatch(setUser(PATH_USER, values) as unknown as any);
                navigate('/planes');
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (
        <div className='max-w-screen-lg mx-auto mt-12 mb-44 px-8 lg:px-0 text-gray-rimac'>
            <div className='flex flex-col gap-x-14 md:flex-row mx-auto'>
                <div className='hidden md:block w-[45%]'>
                    <img src={sloganImage} alt="slogan.png" className='h-auto max-w-full object-cover' />
                </div>
                <div className='max-w-md md:max-w-sm mx-auto mt-12 md:mt-0 md:w-1/2'>
                    <div className='grid grid-cols-12 gap-x-1'>
                        <div className='col-span-8'>
                            <div className='mb-3'>
                                <span className='text-sm font-semibold bg-gradient-to-r from-aqua-rimac to-lemon-rimac px-2.5 py-1 rounded-md'>Seguro Salud Flexible</span>
                            </div>
                            <h1 className='text-3xl font-semibold max-w-xs'>Creado para ti y tu familia</h1>
                        </div>
                        <div className='block md:hidden col-span-4'>
                            <img src={sloganImage} alt="slogan.png" className='h-auto max-w-full' />
                        </div>
                    </div>
                    <hr className='block md:hidden my-6' />
                    <p className='text-sm font-semibold mt-1.5'>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
                    <form className='mt-6' onSubmit={formik.handleSubmit}>
                        <div className="relative">
                            <input type="text" id="identity" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-rimac bg-gray-50 border border-gray-rimac appearance-none focus:outline-none focus:ring-0 focus:border-gray-rimac-60 peer" placeholder="" value={formik.values.identity} onChange={formik.handleChange} onBlur={formik.handleBlur} minLength={8} maxLength={8} />
                            <label htmlFor="identity" className="absolute text-sm text-gray-rimac-60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nro. de documento</label>
                        </div>
                        {formik.touched.identity && formik.errors.identity ? (
                            <div className='text-red-600 font-semibold pt-1 pl-1.5'>
                                <p className='text-[13px]'>{formik.errors.identity}</p>
                            </div>
                        ) : null}
                        <div className="relative mt-4">
                            <input type="text" id="cellphone" className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-rimac bg-gray-50 border border-gray-rimac appearance-none focus:outline-none focus:ring-0 focus:border-gray-rimac-60 peer" placeholder="" value={formik.values.cellphone} onChange={formik.handleChange} onBlur={formik.handleBlur} minLength={9} maxLength={9} />
                            <label htmlFor="cellphone" className="absolute text-sm text-gray-rimac-60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Celular</label>
                        </div>
                        {formik.touched.cellphone && formik.errors.cellphone ? (
                            <div className='text-red-600 font-semibold pt-1 pl-1.5'>
                                <p className='text-[13px]'>{formik.errors.cellphone}</p>
                            </div>
                        ) : null}
                        <div className='flex flex-nowrap gap-x-3 items-center mt-5 text-sm'>
                            <input title='privacy' type="checkbox" className='w-4 h-4 text-gray-rimac bg-gray-100 border-gray-300 rounded focus:ring-gray-rimac focus:ring-2' name="privacy" id="privacy" checked={formik.values.privacy} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                            <label htmlFor="privacy">Acepto la Política de Privacidad</label>
                        </div>
                        {formik.touched.privacy && formik.errors.privacy ? (
                            <div className='text-red-600 font-semibold pt-1 pl-1.5'>
                                <p className='text-[13px]'>{formik.errors.privacy}</p>
                            </div>
                        ) : null}
                        <div className='flex flex-nowrap gap-x-3 items-center mt-2.5 text-sm'>
                            <input title='comercial' type="checkbox" className='w-4 h-4 text-gray-rimac bg-gray-100 border-gray-300 rounded focus:ring-gray-rimac focus:ring-2' name="comercial" id="comercial" checked={formik.values.comercial} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            <label htmlFor="comercial">Acepto la Política Comunicaciones Comerciales</label>
                        </div>
                        {formik.touched.comercial && formik.errors.comercial ? (
                            <div className='text-red-600 font-semibold pt-1 pl-1.5'>
                                <p className='text-[13px]'>{formik.errors.comercial}</p>
                            </div>
                        ) : null}
                        <p className='font-semibold underline text-sm mt-2.5'>Aplican Términos y Condiciones</p>
                        <div className='mt-6'>
                            <button type='submit' className='bg-gray-rimac text-white rounded-full py-3 px-8 font-semibold'>Cotiza aquí</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Insurence