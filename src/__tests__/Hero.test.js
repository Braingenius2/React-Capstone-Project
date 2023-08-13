import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../components/Hero';

test('renders Hero component', () => {
  const details = [
    { stats: '1000', text: 'cases' },
    { stats: '500', text: 'recovered' },
  ];
  const { getByText } = render(<Hero name="Continent" details={details} />);
  const casesElement = getByText('1000 cases');
  const recoveredElement = getByText('500 recovered');
  expect(casesElement).toBeInTheDocument();
  expect(recoveredElement).toBeInTheDocument();
});
