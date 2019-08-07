import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./sub/sub.module').then(mod => mod.SubModule) },
  { path: '', component: HomePage },
  //{ path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
