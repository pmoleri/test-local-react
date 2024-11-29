import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CustomerDto } from '../models/northwind-apiig/customer-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindAPIIGService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerDtoList(): Observable<CustomerDto[]> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get<CustomerDto[]>(`${API_ENDPOINT}/Customers`, options)
      .pipe(catchError(ErrorHandlerService.handleError<CustomerDto[]>('getCustomerDtoList', [])));
  }
}
