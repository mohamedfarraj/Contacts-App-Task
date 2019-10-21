import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/common/services/ui-service/ui.service';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { imageUrl } from 'src/app/common/constants/api.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user: any;
  imageUrl = imageUrl+'/';
  constructor(
    public uiService: UiService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userADMIN'));
  }

  changeLang() {
    this.uiService.changeLang();
  }

  logout() {
    this.auth.logout();
  }

}
