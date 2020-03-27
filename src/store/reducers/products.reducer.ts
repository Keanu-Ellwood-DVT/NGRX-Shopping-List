import {
  getProductsAction,
  getProductsCompleteAction,
  addProductAction,
  editProductAction,
  deleteProductAction
} from "../actions/products.actions";
import { Product } from "src/store/models/Product";
import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { Action } from '@ngrx/store';

export interface ProductListState {
  productListItems: Array<Product>
}

export const initialState: ProductListState = {
  productListItems: Array<Product>()
};

export const initialAppState: Array<Product> = [
  {
    id: "1",
    name: "Toilet Paper",
    complete: false
  },
  {
    id: "2",
    name: "Milk",
    complete: false
  },
  {
    id: "3",
    name: "Orange Juice",
    complete: false
  },
  {
    id: "4",
    name: "Bread",
    complete: false
  }
];

const productListReducer = createReducer(
  initialState,
  on(getProductsAction, state => ({...state})),
  on(getProductsCompleteAction, (state, { payload }) => ({
    ...state,
    shoppingListItems: [...state.productListItems, ...payload]
  })),
  on(addProductAction, (state, { payload }) => ({
    ...state,
    shoppingListItems: [...state.productListItems, payload]
  })),
  on(deleteProductAction, (state, { payload } ) => {
    const tempList = state.productListItems.filter(product => product.id !== payload.id);
    return{
      ...state,
      shoppingListItems: [...tempList]
    }
  }),
  on(editProductAction, (state, { payload }) => {
    const tempList = state.productListItems.map(product => product.id === payload.id ? payload : product);
    return {
      ...state,
      shoppingListItems: [...tempList]
    };
  })
)

export function ProductListReducer(state: ProductListState = initialState, action: Action) {
  state.productListItems = initialAppState;
  return productListReducer(state, action);
}

export const selectFeature = createFeatureSelector<any, ProductListState>('productList');

export const selectListItems = createSelector(
  selectFeature,
  (state: ProductListState) => state.productListItems
);
