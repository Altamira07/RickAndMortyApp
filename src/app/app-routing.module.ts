import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: 'characters', component: IndexComponent },
  { path: 'characters/:id', component: DetailComponent },
  { path: '**',   redirectTo: '/characters', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
