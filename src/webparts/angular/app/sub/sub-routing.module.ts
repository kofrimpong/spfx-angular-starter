import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home/home.page';
//import { AuthGuard }  from '../auth/auth.guard';

const subRoutes: Routes = [
    {
      path: '',
      component: HomePage,
      //canActivate: [AuthGuard],
      children: [
        {
          path: '',
          //canActivateChild: [AuthGuard],
          children: [
            { path: 'crises', component: HomePage }
          ]
        }
      ]
    }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(subRoutes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class SubRoutingModule { }
