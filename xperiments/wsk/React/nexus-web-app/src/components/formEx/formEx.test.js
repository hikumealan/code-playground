import React from 'react';
import { render } from '@testing-library/react';
import FormEx from './formEx';

test('renders app', () => {
    const element = render(<FormEx />);
    expect(element);
});
