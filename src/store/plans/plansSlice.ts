import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Plan } from '../../models';

export const plansSlice = createSlice({
    name: 'plans',
    initialState: {
        plans: [] as Array<Plan>,
        selected: {
            me: false,
            someone_else: false
        }
    },
    reducers: {
        SET_PLANS: (state, { payload }: PayloadAction<Array<Plan>>) => {
            state.plans = payload;
        },
        PLAN_SELECTED: (state, { payload }: PayloadAction<any>) => {
            state.selected = { ...state.selected, me: payload.me, someone_else: payload.someone_else };
        }
    }
});

export const {
    SET_PLANS,
    PLAN_SELECTED,
} = plansSlice.actions;