import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormationComponent } from './pages/formation/formation.component';
import { AuditComponent } from './pages/audit/audit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'formation', component:FormationComponent},
  {path:'audit', component:AuditComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
