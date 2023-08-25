import { Plan } from '../../models';
import { callToRimacAPI } from '../../services';
import { getAge } from '../../utils/getAge';
import * as PlansActions from './plansSlice';

export const setPlans = (path: string, values: any) => {
    const plans: Array<Plan> = [];
    const birthday = `${values.birthDay.split('-')[2]}-${values.birthDay.split('-')[1]}-${values.birthDay.split('-')[0]}`;
    const age = getAge(birthday);
    return async (dispatch: any) => {
        // dispatch(setLoading(true) as unknown as any);
        const { data } = await callToRimacAPI(path, values);
        // dispatch(setLoading(false) as unknown as any);
        const { list } = data;
        list.map((plan: Plan) => {
            if (plan.age >= age) plans.push({ ...plan, price: values.option === 'someone_else' ? 0.95 * plan.price : plan.price });
        })
        dispatch(PlansActions.SET_PLANS(plans));
    };
};

export const planSelected = (name: string) => {
    return async (dispatch: any) => {
        dispatch(PlansActions.PLAN_SELECTED(name === 'me' ? { me: true, someone_else: false } : { me: false, someone_else: true }));
    }
}
