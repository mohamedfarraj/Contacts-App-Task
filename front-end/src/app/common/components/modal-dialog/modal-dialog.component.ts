import { Component, OnInit, Inject, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data/data.service';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui-service/ui.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit, OnDestroy {
  periods: any[];
  subscriptions: Subscription[] = [];

  @Output() confirmed: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private dataService: DataService,
    private uiService: UiService,
  ) { }

  ngOnInit() {
    this.periods = this.data.periods;
  }

  bookNow(id) {
    this.subscriptions.push(
      this.dataService.bookPeriod(id).subscribe(res => {
        this.uiService.openSnackBar('general.reservedSuccessfully', '', 'success');
        this.confirmed.emit(true);
        this.dialogRef.close();
        this.uiService.isLoading.next(false);
      }, err => {
        this.uiService.openSnackBar('general.errorHappened', '', 'error');
        this.uiService.isLoading.next(false);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }



}
