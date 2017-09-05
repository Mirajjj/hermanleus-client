import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrainDirective } from '../../directives/brain/brain.directive';
import { SpaceWalkDirective } from '../../directives/space-walk/space-walk.directive';

@NgModule({
  declarations: [
    AppComponent,
    BrainDirective,
    SpaceWalkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
