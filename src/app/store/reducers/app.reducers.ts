import { ActionReducerMap } from "@ngrx/store";
import { cartReducer } from "./cart.reducer";

export interface AppState{
    cart: any
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: cartReducer,
}