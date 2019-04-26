import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentlyAddedPageComponent } from './recently-added-page/recently-added-page.component';
import { HeaderComponent } from './header/header.component';
import {
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { GoPageComponent } from './go-page/go-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedPageComponent,
    HeaderComponent,
    GoPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
