import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyLocalLibModule } from "sample-lib";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MyLocalLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
