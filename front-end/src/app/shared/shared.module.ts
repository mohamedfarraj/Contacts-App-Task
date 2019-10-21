import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { UiService } from 'src/app/common/services/ui-service/ui.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { DataService } from 'src/app/common/services/data/data.service';
import { NoDataComponent } from 'src/app/common/components/no-data/no-data.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { UserService } from '../common/services/general/user.service';



@NgModule({
  declarations: [
    NoDataComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    CustomFormsModule,
    NgxDropzoneModule,
    NguCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZl6T6qjsZ3Ji8MZKcbrtKZrk9OA5y5I8'
    }),
  ],
  exports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    NgxDropzoneModule,
    NoDataComponent,
    NguCarouselModule,
    HttpClientModule,
    AgmCoreModule
  ],
  providers: [
    UiService,
    GeneralService,
    UserService,
    DataService
  ]
})
export class SharedModule { }
