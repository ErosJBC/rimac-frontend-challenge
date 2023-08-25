import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).name : '',
        cellphone: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).cellphone : '',
        lastName: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).lastName : '',
        DNI: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).DNI : '',
        birthDay: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).birthDay : '',
    } as User,
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