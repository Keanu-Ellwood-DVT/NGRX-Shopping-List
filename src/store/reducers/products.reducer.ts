import {
  ProductListActionTypes,
  ProductListAction
} from "../actions/products.actions";
import { Product } from "src/store/models/Product";

const initialState: Array<Product> = [
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

export function ProductListReducer(
  state: Array<Product> = initialState,
  action: ProductListAction
) {
  switch (action.type) {
    case ProductListActionTypes.ADD_PRODUCT:
      return [...state, action.payload];
    case ProductListActionTypes.DELETE_PRODUCT:
      return state.filter(item => item.id !== action.payload.id);
    case ProductListActionTypes.EDIT_PRODUCT:
      return state.map(item => {
        return item.id === action.payload.updatedProduct.id ? {...action.payload.updatedProduct} : item;
      });
    default:
      return state;
  }
}
