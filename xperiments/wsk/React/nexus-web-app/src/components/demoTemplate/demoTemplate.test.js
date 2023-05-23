import React from 'react';
import { render } from '@testing-library/react';
import DemoTemplate from './demoTemplate';

test('renders app', () => {
    const element = render(
        <DemoTemplate description="desc" header="title">
            <div />
        </DemoTemplate>
    );
    expect(element);
});
