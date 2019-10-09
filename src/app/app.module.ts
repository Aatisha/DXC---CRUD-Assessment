import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { NavComponent } from './nav/nav.component';
import { UpdateComponent } from './update/update.component';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NavComponent,
    UpdateComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
