import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/pages/dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./components/pages/pages/pages.module').then(m => m.PagesModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
