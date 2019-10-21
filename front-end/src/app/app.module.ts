import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './common/components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthService } from './common/services/auth/auth.service';
import { AuthGuard } from './common/services/auth/auth.guard';
import { IsLoggedGuard } from './common/services/auth/isLogged.guard';
import { AccordionComponent } from './common/components/accordion/accordion.component';
import { ModalDialogComponent } from './common/components/modal-dialog/modal-dialog.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddComponent } from './common/components/home/add/add.component';
import { ViewComponent } from './common/components/home/view/view.component';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
import { UserSidebarComponent } from './common/components/user-sidebar/user-sidebar.component';


import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AccordionComponent,
    ModalDialogComponent,
    AddComponent,
    ViewComponent,
    
    UserSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, IsLoggedGuard],
  entryComponents: [ModalDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
