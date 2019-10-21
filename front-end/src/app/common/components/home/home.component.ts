import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { imageUrl } from 'src/app/common/constants/api.constant';
import { UserService } from '../../services/general/user.service';
import { user, pagingEnd, pagingStart } from 'src/app/common/constants/general.constants';
import { UiService } from 'src/app/common/services/ui-service/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allData: any;
  subscriptions: Subscription[] = [];
  imageUrl = imageUrl;
  pageInfo: any;
  pageCount: number[] = [];
  pagingStart = pagingStart;
  pagingEnd = pagingEnd;
  selected = 1;
  constructor(
    private uiService: UiService,
    private userService: UserService) { }

  ngOnInit() {
    this.getData();
  }


  getData(page = 1) {
    this.subscriptions.push(
      this.userService.getData(`contacts?page=${page}`).subscribe((res: any) => {
        this.allData = res.docs;
        this.uiService.isLoading.next(false);
      })
    );
  }


  deleteData(id) {
    this.userService.deleteData(`contacts/${id}`).subscribe(res => {
      this.uiService.openSnackBar('general.deletedSuccess', '', 'success');
      this.getData();
      this.uiService.isLoading.next(false);
    });
  }




  nextNumbers() {
    if (this.pagingEnd >= this.pageInfo.totalPages) {
      return;
    }
    this.pagingStart += pagingEnd;
    this.pagingEnd += pagingEnd;
  }

  prevNumbers() {
    if (this.pagingStart <= 0) {
      return;
    }
    this.pagingStart -= pagingEnd;
    this.pagingEnd -= pagingEnd;
  }

  isSelected(pageNumber: number) {
    this.selected = pageNumber;
    this.subscriptions.push(
      this.userService.getData(pageNumber).subscribe((res: any) => {
        this.allData = res.docs;
        this.pageInfo = res;
        this.uiService.isLoading.next(false);
      })
    );
  }

  nextPage() {
    if (this.selected >= this.pageInfo.totalPages) {
      return;
    } else {
      this.selected = this.selected + 1;
      if (this.selected > this.pagingEnd) {
        this.nextNumbers();
      }
      this.subscriptions.push(
        this.userService.getData(this.selected).subscribe((res: any) => {
          this.allData = res.docs;
          this.pageInfo = res;
          this.uiService.isLoading.next(false);
        })
      );
    }
  }

  lastPage() {
    const limit = this.pageInfo.totalPages;
    if (limit > pagingEnd) {
      this.pagingEnd = limit;
      this.pagingStart = limit - pagingEnd;
    }
    this.subscriptions.push(
      this.userService.getData(limit).subscribe((res: any) => {
        this.allData = res.docs;
        this.pageInfo = res;
        this.selected = limit;
        this.uiService.isLoading.next(false);
      })
    );
  }

  prevPage() {
    if (this.selected <= 1) {
      return;
    } else {
      this.selected = this.selected - 1;
      if (this.selected <= this.pagingStart) {
        this.prevNumbers();
      }
      if (this.selected === 1) {
        this.subscriptions.push(
          this.userService.getData(1).subscribe((res: any) => {
            this.allData = res.docs;
            this.pageInfo = res;
            this.uiService.isLoading.next(false);
          })
        );
      } else {
        this.subscriptions.push(
          this.userService.getData(this.selected).subscribe((res: any) => {
            this.allData = res.docs;
            this.pageInfo = res;
            this.uiService.isLoading.next(false);
          })
        );
      }
    }
  }

  firstPage() {
    this.pagingEnd = pagingEnd;
    this.pagingStart = pagingStart;
    this.subscriptions.push(
      this.userService.getData(1).subscribe((res: any) => {
        this.allData = res.docs;
        this.pageInfo = res;
        this.selected = 1;
        this.uiService.isLoading.next(false);
      })
    );
  }

}

