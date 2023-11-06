import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component'; // Import RegistrationFormComponent

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
