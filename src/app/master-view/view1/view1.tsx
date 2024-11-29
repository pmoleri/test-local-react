import { IgrCombo, IgrComboModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import { useGetCustomerDtoList } from '../../hooks/northwind-apiig-hooks';
import styles from './view1.module.css';
import createClassTransformer from '../../style-utils';

IgrComboModule.register();

export default function View1() {
  const classes = createClassTransformer(styles);
  const [value, setValue] = useState<string | undefined>('ALFKI');
  const { northwindAPIIGCustomerDto } = useGetCustomerDtoList();

  return (
    <>
      <div className={classes("row-layout view-1-container")}>
        <IgrCombo outlined="true" data={northwindAPIIGCustomerDto} label="Label/Placeholder" valueKey="customerId" displayKey="customerId" singleSelect="true" value={value ? [value] : []} change={(_c, e) => set_value(e.detail.newValue[0])} className={classes("single-select-combo")}></IgrCombo>
      </div>
    </>
  );
}
