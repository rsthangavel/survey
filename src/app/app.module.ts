import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
MatCheckboxModule, MatRadioModule, MatButtonModule, MatIconModule, MatGridListModule} from '@angular/material';
import { CreateCardComponent } from './create-card/create-card.component';
import { StoreModule} from '@ngrx/store';
import { FormReducer } from '../core/store';
@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({form: FormReducer}),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
