import { FunctionComponent } from 'react'
import { Plan, Quotation } from '../../components';
import { Icons } from '../../assets/svg';
import { useSelector, useDispatch } from 'react-redux';
import { Plan as IPlan } from '../../models';
import { planSelected, setPlans } from '../../store/plans';
import { PATH_PLANS } from '../../constants';

const Plans: FunctionComponent<{}> = () => {
	const { protectionLightIcon, addUserLightIcon } = Icons;
	const { name, birthDay } = useSelector((state: any) => state.user);
	const { plans, selected } = useSelector((state: any) => state.plans);
	const dispatch = useDispatch();

	const handleClick: (option: string) => void = (option: string) => {
		dispatch(planSelected(option) as unknown as any);
		dispatch(setPlans(PATH_PLANS, { option, name, birthDay }) as unknown as any);
	}

	return (
		<div className='max-w-4xl min-h-screen mx-auto mt-10 mb-14 text-gray-rimac px-8'>
			<h2 className='text-4xl max-w-lg mx-auto text-center font-semibold mb-4'>{ name }, ¿Para quién deseas cotizar?</h2>
			<h3 className='text-base text-center max-w-lg mx-auto mb-7'>Selecciona la opción que se ajuste más a tus necesidades.</h3>
			<div className='max-w-xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mx-auto'>
				<Quotation icon={protectionLightIcon} title='Para mí' description='Cotiza tu seguro de salud y agrega familiares si así lo deseas' selected={selected.me} onClick={() => handleClick('me')} />
				<Quotation icon={addUserLightIcon} title='Para mí' description='Cotiza tu seguro de salud y agrega familiares si así lo deseas' selected={selected.someone_else} onClick={() => handleClick('someone_else')} />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 mt-5 mx-auto gap-x-8 gap-y-6'>
				{ plans.map((plan: IPlan) => (
					<Plan key={plan.name} plan={plan} />
				))}
			</div>
		</div>
	)
}

export default Plans;
