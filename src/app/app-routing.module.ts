import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsDishComponent } from './components/details-dish/details-dish.component';
import { ListDishComponent } from './components/list-dish/list-dish.component';


const routes: Routes = [
  {path: "listDish", component: ListDishComponent},
  {path: "detailsDish/:id", component: DetailsDishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
