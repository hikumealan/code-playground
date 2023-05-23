import React from 'react';
import { render } from '@testing-library/react';
import DataEx from './dataEx';

test('renders app', () => {
    const element = render(<DataEx />);
    expect(element);
});
