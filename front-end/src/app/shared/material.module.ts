import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatDialogModule
} from '@angular/material';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatDialogModule,
    Ng5SliderModule,
    NgxMatIntlTelInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatDialogModule,
    Ng5SliderModule,
    NgxMatIntlTelInputModule
  ]
})
export class MaterialModule { }
