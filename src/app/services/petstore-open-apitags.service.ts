import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Pet } from '../models/petstore-open-apitags/pet';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://petstore3.swagger.io/api/v3';

@Injectable({
  providedIn: 'root'
})
export class PetstoreOpenAPITagsService {
  constructor(
    private http: HttpClient
  ) { }

  public getPetList(status: string = 'available'): Observable<Pet[]> {
    const params = new HttpParams()
      .append('status', status);
    const options = {
      params,
    };
    return this.http.get<Pet[]>(`${API_ENDPOINT}/pet/findByStatus`, options)
      .pipe(catchError(ErrorHandlerService.handleError<Pet[]>('getPetList', [])));
  }
}
