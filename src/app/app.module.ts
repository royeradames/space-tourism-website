import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { DestinationComponent } from './destination/destination.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TechnologyComponent } from './technology/technology.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'technology', component: TechnologyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    DestinationComponent,
    HeaderComponent,
    HomeComponent,
    TechnologyComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
