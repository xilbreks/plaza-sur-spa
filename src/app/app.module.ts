import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ShellComponent } from './core/shell/shell.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
