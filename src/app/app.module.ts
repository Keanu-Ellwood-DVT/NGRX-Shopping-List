import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductListReducer } from "src/store/reducers/products.reducer";
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ ProductListReducer }),
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
