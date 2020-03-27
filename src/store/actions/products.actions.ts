import { Action, createAction, props } from "@ngrx/store";
import { Product } from "src/store/models/Product";

export const getProductsAction = createAction("[PRODUCT-LIST] Get Products");

export const getProductsCompleteAction = createAction(
  "[Shopping] Get Products Completed"
  , props<{ payload: Product[] }>()
);

export const addProductAction = createAction(
  "[PRODUCT-LIST] Add Product",
  props<{ payload: Product }>()
);

export const deleteProductAction = createAction(
  "[PRODUCT-LIST] Add Product",
  props<{ payload: Product }>()
);

export const editProductAction = createAction(
  "[PRODUCT-LIST] Add Product",
  props<{ payload: Product }>()
);
