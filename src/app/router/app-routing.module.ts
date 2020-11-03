import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDishComponent } from '../components/add-dish/add-dish.component';
import { DetailsDishComponent } from '../components/details-dish/details-dish.component';
import { HomeComponent } from '../components/home/home.component';
import { ListDishComponent } from '../components/list-dish/list-dish.component';
import { UpdateDishComponent } from '../components/update-dish/update-dish.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';



const routes: Routes = [
  {
    path: 'dish',

    children: [

      { path: "listDish", component: ListDishComponent },
      { path: "detailsDish/:id", component: DetailsDishComponent },
      { path: "addDish", component: AddDishComponent },
      { path: "updateDish/:id", component: UpdateDishComponent },
      { path: '', component: ListDishComponent },

    ]
  },

  { path: 'user/listUser', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'user/detailsUser/:id', loadChildren: () => import('./details-user/details-user.module').then(m => m.DetailsUserModule) },
  { path: 'user/addUser', loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule) },
  { path: 'user/updateUser/:id', loadChildren: () => import('./update-user/update-user.module').then(m => m.UpdateUserModule) },



  {
    path: 'home', redirectTo: '/', pathMatch: 'full'
  },

  {
    path: '', component: HomeComponent
  },
  

  {
    path: '**', component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
