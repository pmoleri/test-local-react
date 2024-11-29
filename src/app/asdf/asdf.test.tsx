import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Asdf from './asdf';
import 'element-internals-polyfill';

test('renders Asdf component', () => {
  const wrapper = render(<Asdf />);
  expect(wrapper).toBeTruthy();
});