import React from 'react';
import '../../styles.scss';

const CustomizeBreakpoints = () => {
    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
        <span className='nexus-h3'>Customize Breakpoints</span>
        <hr className='underline' />
        <p>Use the following variable in the show code sample to customize the Nexus Grid Layouts and Breakpoints.</p>
        <pre>
            <code className="language-css">
                {
                    `$nexus-grid-prefix: 'nexus-';

$nexus-grid-breakpoints: (
double-extra-small: (
name: '2xs',
columns: 4,
gutter: 16px,
min-width: 0,
max-width: 319px
),
extra-small: (
name: 'xs',
columns: 4,
gutter: 16px,
min-width: 320px,
max-width: 575px
),
small: (
name: 'sm',
columns: 4,
gutter: 16px,
min-width: 576px,
max-width: 767px
),
medium: (
name: 'md',
columns: 8,
gutter: 24px,
min-width: 768px,
max-width: 1023px
),
large: (
name: 'lg',
columns: 12,
gutter: 24px,
min-width: 1024px,
max-width: 1279px
),
extra-large: (
name: 'xl',
columns: 12,
gutter: 24px,
min-width: 1280px,
max-width: 1439px
),
double-extra-large: (
name: '2xl',
columns: 12,
gutter: 24px,
min-width: 1440px
)
);
`
                }
            </code>
        </pre>
    </section>
    );
}

export default CustomizeBreakpoints;