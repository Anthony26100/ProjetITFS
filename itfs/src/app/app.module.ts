import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormationComponent } from './pages/formation/formation.component';
import { AuditComponent } from './pages/audit/audit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SlideUpComponent } from './animation/slide-up/slide-up.component';
import { LegalmentionsComponent } from './pages/legalmentions/legalmentions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormationComponent,
    AuditComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    SlideUpComponent,
    LegalmentionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
