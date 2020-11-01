import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListDishComponent } from './components/list-dish/list-dish.component';
import { DetailsDishComponent } from './components/details-dish/details-dish.component';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { UpdateDishComponent } from './components/update-dish/update-dish.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ListDishComponent,
    DetailsDishComponent,
    AddDishComponent,
    UpdateDishComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
