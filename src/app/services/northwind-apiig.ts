import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

export async function getCustomerDtoList(): Promise<CustomerDto[]> {
  const headers = {
    Authorization: 'Bearer <auth_value>'
  };
  return await FetchApi.fetchApiResponse<CustomerDto[]>(`${API_ENDPOINT}/Customers`, [], 'GET', undefined, headers);
}
