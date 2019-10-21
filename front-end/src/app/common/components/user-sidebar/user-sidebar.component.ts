import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})


export class UserSidebarComponent implements OnInit {
  public isCollapsed = false;
  constructor(
    private auth: AuthService
  ) { }


  toggleClass() {
    this.isCollapsed=this.isCollapsed == true?false:true;
  }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }
}
