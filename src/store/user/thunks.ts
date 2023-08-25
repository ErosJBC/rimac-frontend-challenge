import { callToRimacAPI } from '../../services';
import * as UserActions from './userSlice';

export const setUser = (path: string, values: any) => {
    return async (dispatch: any) => {
        // dispatch(setLoading(true) as unknown as any);
        const response = await callToRimacAPI(path, values);
        // dispatch(setLoading(false) as unknown as any);
        console.log(response.data);
        dispatch(UserActions.SET_USER({
            name: response.data.name,
            lastName: response.data.lastName,
            birthDay: response.data.birthDay,
            DNI: values.identity,
            cellphone: values.cellphone
        }));
    };
};
