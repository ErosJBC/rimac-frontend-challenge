import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import { plansSlice } from "./plans";
import { resumenSlice } from "./resumen";
import { stepperSlice } from "./stepper";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        plans: plansSlice.reducer,
        resumen: resumenSlice.reducer,
        stepper: stepperSlice.reducer,
    }
})