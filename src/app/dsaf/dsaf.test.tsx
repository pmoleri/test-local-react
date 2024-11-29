import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Dsaf from './dsaf';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Dsaf component', () => {
  const wrapper = render(<Dsaf />);
  expect(wrapper).toBeTruthy();
});