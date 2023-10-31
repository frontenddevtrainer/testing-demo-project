import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { HomepageScreenComponent } from './screens/homepage-screen/homepage-screen.component';
import { AlbumsScreenComponent } from './screens/albums-screen/albums-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    AlbumListingComponent,
    AlbumCardComponent,
    HomepageScreenComponent,
    AlbumsScreenComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
