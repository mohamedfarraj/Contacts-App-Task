import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor() {}

  // Format Date
  format(date: Date) {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return y + '/' + (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d);
  }

  // Check Empty Fields
  checkEmptyFields(form) {
    const formValue = { ...form };
    const keys = Object.keys(formValue);
    for (let i = 0; i <= keys.length; i++) {
      if (typeof formValue[keys[i]] === ('object') && formValue[keys[i]] !== null) {
        const item = formValue[keys[i]];
        const itemKeys = Object.keys(item);
        for (let k = 0; k <= itemKeys.length; k++) {
          if (item[itemKeys[k]] === null || item[itemKeys[k]] === '') {
            delete item[itemKeys[k]];
          }
        }
      }
      if (formValue[keys[i]] instanceof Array) {
        formValue[keys[i]].map(item => {
          const itemKeys = Object.keys(item);
          for (let k = 0; k <= itemKeys.length; k++) {
            if (item[itemKeys[k]] === null || item[itemKeys[k]] === '') {
              delete item[itemKeys[k]];
            }
            if (item[itemKeys[k]] instanceof Array) {
              item[itemKeys[k]].map(innerItem => {
                const innerItemKeys = Object.keys(innerItem);
                for (let j = 0; j <= innerItemKeys.length; j++) {
                  if (innerItem[innerItemKeys[j]] === null || innerItem[innerItemKeys[j]] === '') {
                    delete innerItem[innerItemKeys[j]];
                  }
                }
              });
            }
          }
        });
      }
      if (formValue[keys[i]] === null || formValue[keys[i]] === '') {
        delete formValue[keys[i]];
      }
    }
    return formValue;
  }
}
