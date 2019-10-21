import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  otherLang: string;
  isLoading = new Subject<boolean>();
  isCollapsed = new Subject<boolean>();
  constructor(
    private translate: TranslateService,
    private snackBar: MatSnackBar
  ) { }

  get getOtherLang() {
    return this.translate
      .getLangs()
      .find(lang => lang !== this.translate.currentLang);
  }

  changeLang() {
    this.otherLang = this.getOtherLang;
    this.translate.use(this.otherLang);
  }

  toggleSidebar(collapse) {
    this.isCollapsed.next(collapse);
  }

  openSnackBar(message: string, action: string, panelClass: string) {
    this.translate.get([message, action]).subscribe(res => {
      const text: string[] = Object.values(res);
      const messageContent: string = text[0];
      const messageAction: string = text[1];
      this.snackBar.open(messageContent, messageAction, {
        duration: 3000,
        panelClass
      });
    });

  }

}
