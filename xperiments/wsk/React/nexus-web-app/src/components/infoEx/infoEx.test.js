import React from 'react';
import { render } from '@testing-library/react';
import InfoEx from './infoEx';

test('renders app', () => {
    const element = render(<InfoEx />);
    expect(element);
});
