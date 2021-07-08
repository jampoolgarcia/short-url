// core modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// interceptor
import { TokenInterceptor } from './services/token.interceptor';

// root
import { AppComponent } from './app.component';

// components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShortUrlComponent } from './components/short-url/short-url.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortUrlComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
