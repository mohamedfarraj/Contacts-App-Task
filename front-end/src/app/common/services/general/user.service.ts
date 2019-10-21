import { Injectable } from '@angular/core';
import { UiService } from 'src/app/common/services/ui-service/ui.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { apiUrl } from 'src/app/common/constants/api.constant';
import { user } from 'src/app/common/constants/general.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = user;
  constructor(
    private uiService: UiService,
    private http: HttpClient,
  ) { }


  // New Function

  createAuthHeader() {
    const headers = new HttpHeaders();
    // tslint:disable-next-line: max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYWNlMmFlNDk2Y2ZlMmNkOGZlNDA0OSIsImlhdCI6MTU3MTYxMTU1NCwiZXhwIjoxNTcyMjE2MzU0fQ.jBoOaiWccsa40bDYyaZ3EBCxOTHSmllmZ5YxFcAG5uM';
    headers.append('Authorization', `Bearer ${token}`);
    return {headers};
  }

  getData(api) {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/${api}`, this.createAuthHeader());
  }

  postData(api, data) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/${api}`, data, this.createAuthHeader());
  }


  putData(api, data) {
    this.uiService.isLoading.next(true);
    return this.http.put(`${apiUrl}/${api}`, data, this.createAuthHeader());
  }


  deleteData(api) {
    this.uiService.isLoading.next(true);
    return this.http.delete(`${apiUrl}/${api}`, this.createAuthHeader());
  }




}
