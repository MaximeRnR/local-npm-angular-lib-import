import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
  	HeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {
}
