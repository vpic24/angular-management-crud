import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { DetailsDishComponent } from './components/details-dish/details-dish.component';
import { ListDishComponent } from './components/list-dish/list-dish.component';
import { UpdateDishComponent } from './components/update-dish/update-dish.component';


const routes: Routes = [
  {path: "listDish", component: ListDishComponent},
  {path: "detailsDish/:id", component: DetailsDishComponent },
  {path: "addDish", component: AddDishComponent },
  {path: "updateDish/:id", component: UpdateDishComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
