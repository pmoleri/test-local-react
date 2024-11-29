import { useCallback, useEffect, useState } from 'react';
import { getPetList } from '../services/petstore-open-apitags';
import { Pet } from '../models/PetstoreOpenAPITags/pet';

export const useGetPetList = (status: any) => {
  const [pet, setPet] = useState<Pet[]>([]);

  const requestPet = useCallback(() => {
    let ignore = false;
    getPetList(status)
      .then((data) => {
        if (!ignore) {
          setPet(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, [status]);

  useEffect(() => {
    requestPet();
  }, [status, requestPet]);

  return { requestPetstoreOpenAPITagsPet: requestPet, petstoreOpenAPITagsPet: pet, setPetstoreOpenAPITagsPet: setPet };
}
