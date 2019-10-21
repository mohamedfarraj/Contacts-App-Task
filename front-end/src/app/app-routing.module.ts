import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { AuthGuard } from './common/services/auth/auth.guard';
import { IsLoggedGuard } from './common/services/auth/isLogged.guard';
import { ViewComponent } from './common/components/home/view/view.component';
import { AddComponent } from './common/components/home/add/add.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts/add', component: AddComponent },
  { path: 'contacts/edit', component: AddComponent },
  { path: 'contacts/edit', component: ViewComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
