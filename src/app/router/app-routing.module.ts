import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';



const routes: Routes = [
  {
    path: 'dish',

    children: [

      { path: 'listDish', loadChildren: () => import('./components/dish-components/list-dish/list-dish.module').then(m => m.ListDishModule) },
      { path: 'addDish', loadChildren: () => import('./components/dish-components/add-dish/add-dish.module').then(m => m.AddDishModule) },
      { path: 'updateDish/:id', loadChildren: () => import('./components/dish-components/update-dish/update-dish.module').then(m => m.UpdateDishModule) },
      { path: 'detailsDish/:id', loadChildren: () => import('./components/dish-components/details-dish/details-dish.module').then(m => m.DetailsDishModule) },

    ],


  },
  {
    path: 'user',

    children: [

      { path: 'listUser', loadChildren: () => import('./components/user-components/user/user.module').then(m => m.UserModule) },
      { path: 'detailsUser/:id', loadChildren: () => import('./components/user-components/details-user/details-user.module').then(m => m.DetailsUserModule) },
      { path: 'addUser', loadChildren: () => import('./components/user-components/add-user/add-user.module').then(m => m.AddUserModule) },
      { path: 'updateUser/:id', loadChildren: () => import('./components/user-components/update-user/update-user.module').then(m => m.UpdateUserModule) },

    ]
  },

  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
