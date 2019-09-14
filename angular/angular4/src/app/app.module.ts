import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecentlyAddedPageComponent} from './recently-added-page/recently-added-page.component';
import {HeaderComponent} from './header/header.component';
import {GoPageComponent} from './go-page/go-page.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {StorageService} from "./services/storage/storage.service";

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
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
