import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { AlbumListingComponent } from './components/album-listing/album-listing.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    AlbumListingComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
