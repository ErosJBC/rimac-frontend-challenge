import { Resumen } from '../../models';
import * as ResumenActions from './resumenSlice';

export const setResumen = (values: Resumen) => {
    return async (dispatch: any) => {
        // dispatch(setLoading(true) as unknown as any);
        // dispatch(setLoading(false) as unknown as any);
        dispatch(ResumenActions.SET_RESUMEN(values));
    };
};
