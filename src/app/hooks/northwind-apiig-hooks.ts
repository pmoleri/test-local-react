import { useCallback, useEffect, useState } from 'react';
import { CustomerDto } from '../models/NorthwindAPIIG/customer-dto';
import { getCustomerDtoList } from '../services/northwind-apiig';

export const useGetCustomerDtoList = () => {
  const [customerDto, setCustomerDto] = useState<CustomerDto[]>([]);

  const requestCustomerDto = useCallback(() => {
    let ignore = false;
    getCustomerDtoList()
      .then((data) => {
        if (!ignore) {
          setCustomerDto(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomerDto();
  }, [requestCustomerDto]);

  return { requestNorthwindAPIIGCustomerDto: requestCustomerDto, northwindAPIIGCustomerDto: customerDto, setNorthwindAPIIGCustomerDto: setCustomerDto };
}
