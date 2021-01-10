import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APOD_CONFIG_TOKEN } from '@pad/apod/data-access/apod-list';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: APOD_CONFIG_TOKEN,
      useValue: { url: environment.URL_APOD, apiKey: environment.NASA_API_KEY },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
