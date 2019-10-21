import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UiService } from '../ui-service/ui.service';
import { apiUrl } from '../../constants/api.constant';
import { user } from '../../constants/general.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user = user;
  constructor(
    private http: HttpClient,
    private uiService: UiService,
  ) { }

  getMedicalInsuranceCompanies() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/medicalInsuranceCompanies`);
  }



  getMedicalInsuranceCompaniesOne(id) {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/medicalInsuranceCompanies/${id}`);
  }

  getCities() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/cities`);
  }

  getGoves() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/goves`);
  }

  getGovesBytCountries(id) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/general/goves/search`, {
      countriesId: id
    });
  }

  getCitiesByGoves(id) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/general/cities/search`, {
      govesId: id
    });
  }


  getCountries() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/countries`);
  }

  getHospitalLocation(x, y) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=json&location=${x},${y}`);
  }

  getMedicalSpecialties() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/medicalSpecialties`);
  }

  getDoctors() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/employes/doctors`);
  }

  searchDoctors(body) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/employes/doctors/search`, body);
  }

  getTickets(clinicsId) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/tickets/search`, clinicsId);
  }

  getPeriods(ticketsId) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/tickets/period`, ticketsId);
  }

  getDoctorHospital(hospitalsId) {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/hospitals/hospitals/${hospitalsId}`);
  }



  getHospitals() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/hospitals/hospitals`);
  }

  getClinicsByHospitals(id) {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/hospitals/hospitals`);
  }

  bookPeriod(id) {
    this.uiService.isLoading.next(true);
    const body = {
      status: 'reserved',
      patientId: this.user._id
    };
    return this.http.post(`${apiUrl}/tickets/period/booking/${id}`, body);
  }

  getMedicalInsuranceCompaniesClass() {
    this.uiService.isLoading.next(true);
    return this.http.get(`${apiUrl}/general/MedicalInsuranceCompaniesClass/`);
  }
  getMedicalInsuranceCompaniesClassByCopmans(id) {
    this.uiService.isLoading.next(true);
    return this.http.post(`${apiUrl}/general/MedicalInsuranceCompaniesClass/search`, {
      medicalInsuranceCompaniesId: id
    });
  }

}

