import React from 'react';
import { render } from '@testing-library/react';
import ToggleEx from './toggleEx';

test('renders app', () => {
    const element = render(<ToggleEx />);
    expect(element);
});
