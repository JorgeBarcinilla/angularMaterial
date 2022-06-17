import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { IconComponent } from './components/icon/icon.component';
import { MaterialModule } from './modules/material/material.module';
import { ButtonComponent } from './components/button/button.component';
import { FormsComponent } from './components/forms/forms.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IconComponent,
    ButtonComponent,
    FormsComponent,
    DialogComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
