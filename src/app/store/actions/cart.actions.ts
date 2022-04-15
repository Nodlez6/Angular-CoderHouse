import { createAction, props } from "@ngrx/store";
import { results } from "src/app/interfaces/results";

// export const getCart = createAction(
//     '[getCart] getCart'
// )

// export const addDataToCart = createAction(
//     '[addData] addData',
//     props<{ cart: string[] }>()
// )

export const addToCart = createAction(
    '[add Cart] ADD',
    props<{data: results}>()
);
export const deleteItem = createAction(
    '[delete Item] DELETE',
    props<{id: number}>()
)
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');