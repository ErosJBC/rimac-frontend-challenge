import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';

export const userSlice = createSlice({
    name: 'user',
    initialState: {} as User,
    reducers: {
        SET_USER: (state, { payload }: PayloadAction<User>) => {
            state.name = payload.name;
            state.lastName = payload.lastName;
            state.birthDay = payload.birthDay;
            state.DNI = payload.DNI;
            state.cellphone = payload.cellphone;
        }
    }
});

export const {
    SET_USER,
} = userSlice.actions;