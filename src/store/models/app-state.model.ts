import { Product } from 'src/store/models/Product';

export interface AppState {
  readonly productlist: Array<Product>
}
