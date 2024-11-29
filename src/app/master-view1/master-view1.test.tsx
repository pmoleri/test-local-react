import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import MasterView1 from './master-view1';
import 'element-internals-polyfill';

test('renders MasterView1 component', () => {
  const wrapper = render(<MasterView1 />);
  expect(wrapper).toBeTruthy();
});