import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';

const routes: Routes = [
  // { path: 'tracking',  loadChildren: () => import('./tracking-info/tracking-info.module').then(m => m.TrackingInfoModule) },
  { path: '',   redirectTo: '/tracking', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },   
  { path: '/tracking', component: TrackingInfoComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
