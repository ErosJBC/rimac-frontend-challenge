import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Resumen } from '../../models';

export const resumenSlice = createSlice({
    name: 'resumen',
    initialState: {} as Resumen,
    reducers: {
        SET_RESUMEN: (state, { payload }: PayloadAction<Resumen>) => {
            state.name = payload.name;
            state.lastName = payload.lastName;
            state.DNI = payload.DNI;
            state.cellphone = payload.cellphone;
            state.plan = payload.plan;
            state.price_plan = payload.price_plan;
        }
    }
});

export const {
    SET_RESUMEN,
} = resumenSlice.actions;