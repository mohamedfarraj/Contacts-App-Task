import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/common/services/ui-service/ui.service';
import { UserService } from '../../../../common/services/general/user.service';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { GeneralService } from 'src/app/common/services/general/general.service';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  dataForm: FormGroup;

  files: File[] = [];
  id: any;
  data: any;

  constructor(
    private uiService: UiService,
    private userService: UserService,
    private router: Router,
    private generalService: GeneralService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      if (this.id != null) {
        this.userService.getData(`contacts/${this.id}`).subscribe((res: any) => {
          this.data = res;
          this.uiService.isLoading.next(false);

          this.initForm();
        }, err => {
          this.uiService.openSnackBar(err, '', 'error');
          this.uiService.isLoading.next(false);
        });
      } else {
        this.initForm();
      }
    });
  }


  get Form() {
    return this.dataForm.controls;
  }

  get contactGroup() {
    return this.dataForm.controls.contact as FormGroup;
  }


  submit() {
    if (this.dataForm.valid) {
      if (this.data) {
        const formValue = this.generalService.checkEmptyFields(this.dataForm.value);
        this.userService.putData('contacts/' + this.id, formValue).subscribe((res: any) => {
          this.uiService.openSnackBar('general.updateSuccess', '', 'success');

          this.uiService.isLoading.next(false);
          this.router.navigate(['/home']);
        }, err => {
          this.uiService.openSnackBar(err, '', 'error');
          this.uiService.isLoading.next(false);
        }
        );
      } else {
        const formValue = this.generalService.checkEmptyFields(this.dataForm.value);
        this.userService.postData('contacts', formValue).subscribe((res: any) => {
          this.uiService.openSnackBar('general.addSuccess', '', 'success');

          this.uiService.isLoading.next(false);
          this.router.navigate(['/home']);
        }, err => {
          this.uiService.openSnackBar(err, '', 'error');
          this.uiService.isLoading.next(false);
        }
        );
      }
    }
  }


  private initForm() {
    let name = '';
    let nameEn = '';

    if (this.data) {
      name = this.data.name;
      nameEn = this.data.nameEn;
    }
    this.dataForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      nameEn: new FormControl(nameEn, Validators.required)
    });
  }
}
