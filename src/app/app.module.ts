import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { HousingService } from './services/housing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-details/:Id', component: PropertyDetailComponent },
  // { path: '**', component: PropertyListComponent }, Redirect to details page
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
