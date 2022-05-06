import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';

import { HomeComponent } from './pages/home/home.component';
import { FormationComponent } from './pages/formation/formation.component';
import { AuditComponent } from './pages/audit/audit.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [


  {path: '', component:HomeComponent},
  {path: 'formation', component:FormationComponent},
  {path: 'audit', component:AuditComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'legalmentions', component:LegalmentionsComponent},
<<<<<<< HEAD
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent}
=======
  {path: '**', pathMatch: 'full', component: PagenotfoundComponent }
>>>>>>> 35356e8b3f72814c0071fce46bb928aabb480482

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
