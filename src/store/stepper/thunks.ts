import * as StepperActions from './stepperSlice';

export const setStep = (values: any) => {
    return async (dispatch: any) => {
        dispatch(StepperActions.SET_STEP(values));
    };
};
