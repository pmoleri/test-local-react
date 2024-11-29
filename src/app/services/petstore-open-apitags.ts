import { FetchApi } from './fetch-api';
import { Pet } from '../models/PetstoreOpenAPITags/pet';

const API_ENDPOINT = 'https://petstore3.swagger.io/api/v3';

export async function getPetList(status: string = 'available'): Promise<Pet[]> {
  const query = new URLSearchParams({
    'status': status });
  return await FetchApi.fetchApiResponse<Pet[]>(`${API_ENDPOINT}/pet/findByStatus?${query}`, []);
}
