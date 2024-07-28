import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    loadChildren: () => import('./other-links/other-links.module').then(m => m.OtherLinksModule)
  }
  // Other routes in your application
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], // adjust for fixed headers if necessary,
  enableTracing: false,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
