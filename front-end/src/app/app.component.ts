import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { UiService } from './common/services/ui-service/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Contacts App Task';
  currentLang: string;
  loading: boolean;

  constructor(
    private translate: TranslateService,
    private uiService: UiService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('ar');
    const userLang = localStorage.getItem('userLang');
    translate.use(userLang);
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
      localStorage.setItem('userLang', event.lang);
      const bodyDir = this.currentLang !== 'ar' ? 'ltr' : 'rtl';
      const bodyClass = this.currentLang !== 'ar' ? 'ltr' : 'rtl';
      this.document.body.setAttribute('dir', bodyDir);
      this.document.body.removeAttribute('class');
      this.document.body.classList.add(bodyClass);
    });

    localStorage.setItem('userLang', 'ar');
    this.uiService.isLoading.subscribe(res => this.loading = res);
  }

}
