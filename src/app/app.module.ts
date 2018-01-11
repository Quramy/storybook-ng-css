import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ButtonWithCssComponent } from './button-with-css/button-with-css.component';
import { ButtonWithScssComponent } from './button-with-scss/button-with-scss.component';
import { ButtonWithGlobalComponent } from './button-with-global/button-with-global.component';
import { ButtonWithAssetComponent } from './button-with-asset/button-with-asset.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    ButtonWithCssComponent,
    ButtonWithScssComponent,
    ButtonWithGlobalComponent,
    ButtonWithAssetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
