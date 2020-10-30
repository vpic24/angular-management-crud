import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDishComponent } from './components/list-dish/list-dish.component';


const routes: Routes = [
  {path: "ListDish", component: ListDishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
