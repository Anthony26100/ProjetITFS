import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormationComponent } from './pages/formation/formation.component';
import { AuditComponent } from './pages/audit/audit.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
