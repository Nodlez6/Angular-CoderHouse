import { createReducer, on } from "@ngrx/store";
import * as actions from '../actions/cart.actions';
import { results } from "src/app/interfaces/results";


// export const initialState = {
//     cart: ['aa']
// };

// export const cartReducer = createReducer(
//     initialState,
//     on(actions.getCart, () => (initialState)),
//     on(actions.addDataToCart, (state) => (initialState))
// )

import { addToCart, deleteItem, decrement, reset } from '../actions/cart.actions';

export const initialState: results[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {data}) => ([...state, data])),
  on(deleteItem, (state, {id}) => {
      let stateAux = [...state];
      const result = stateAux.filter(item => item.id != id)
      return result
  }),
  on(reset, (state) => initialState)
);