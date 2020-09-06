import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TextMaskModule} from 'angular2-text-mask';
import {FormsModule} from '@angular/forms';
import { KaretkaDirective } from './karetka.directive';

@NgModule({
  declarations: [
    AppComponent,
    KaretkaDirective
  ],
  imports: [
    BrowserModule,
    TextMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
