import { ProductListActionTypes, ProductListAction } from '../actions/products.actions';
import { Product } from 'src/store/models/Product';

const initialState: Array<Product> = [
  {
    id: "1",
    name: 'Toilet Paper',
  }
];

export function ProductListReducer(state: Array<Product> = initialState, action: ProductListAction) {
  switch (action.type) {
    case ProductListActionTypes.ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
}
