import { Component, OnInit } from '@angular/core';
import { imageUrl } from 'src/app/common/constants/api.constant';
import { UiService } from 'src/app/common/services/ui-service/ui.service';
import { UserService } from '../../../../common/services/general/user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  data: any;
  imageUrl = imageUrl;
  constructor(
    private uiService: UiService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.route.params.subscribe((params: Params) => {
      this.userService.getData(`employes/doctors/${params.id}`).subscribe((res: any) => {
        this.data = res;
        this.uiService.isLoading.next(false);
      });
    });
  }
}
