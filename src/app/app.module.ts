import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { SpacesComponent } from './spaces/spaces.component';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero.service';
import { MatMenuModule } from '@angular/material/menu';
// import { } from '@angular/material/grid-list';
@NgModule({
  declarations: [AppComponent, SpacesComponent, HeroesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
