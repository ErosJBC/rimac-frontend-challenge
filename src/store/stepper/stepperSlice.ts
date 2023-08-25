import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Stepper } from '../../models';

export const stepperSlice = createSlice({
    name: 'stepper',
    initialState: {
        step: 1,
        active: true,
        path: '/planes'
    } as Stepper,
    reducers: {
        SET_STEP: (state, { payload }: PayloadAction<Stepper>) => {
            state.step = payload.step;
            state.active = payload.active;
            state.path = payload.path;
        }
    }
});

export const {
    SET_STEP,
} = stepperSlice.actions;