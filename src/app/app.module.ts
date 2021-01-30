import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApirequestComponent } from './components/apirequest/apirequest.component';
import { MyFilterApiComponent } from './components/my-filter-api/my-filter-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApirequestComponent,
    MyFilterApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
