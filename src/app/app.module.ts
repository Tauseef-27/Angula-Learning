import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ViewDataComponent } from './formdata/view-data/view-data.component';
import { RegisterComponent } from './register/register.component';
import { JsonDataComponent } from './json-data/json-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    RegisterComponent,
    JsonDataComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  

  ],
  providers: [CookieService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
