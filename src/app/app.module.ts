import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PoundFormaterPipe } from './pipes/pound-formater/pound-formater.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { RecordComponent } from './components/record/record.component';
import { MapPageComponent } from './pages/map/map.page';
import { GoogleMapsAPIKey } from 'src/app-env';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    HeaderComponent,
    FooterComponent,
    HomePage,
    AboutPage,
    MapPageComponent,
    FilterPipe,
    PoundFormaterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: GoogleMapsAPIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
