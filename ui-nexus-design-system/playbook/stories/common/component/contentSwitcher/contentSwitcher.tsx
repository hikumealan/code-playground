import React from 'react';
/*
    The content switcher is hardcoded with the logic of pointing to first story all the time.
    This is accomplished with the prefix 'a'. In future as storybook fixes the github issue
    https://github.com/storybookjs/storybook/issues/17665 we will also refactor this piece of
    code to accomadate the logic for content switcher implementation.
*/

const ContentSwitcher: React.FC<{category: string, component: string, primaryFW: string}> = ({category, component, primaryFW}) => {
    const sbMenuCategory = category.replaceAll(' ', '-').toLowerCase();
    const componentPath = component.replaceAll('_', '-');
    const WC_URL = `${process.env.STORYBOOK_WC_URL}?path=/docs/component-${sbMenuCategory}-${componentPath}--a-${componentPath}`;
    const REACT_URL = `${process.env.STORYBOOK_REACT_URL}?path=/docs/component-${sbMenuCategory}-${componentPath}--a-${componentPath}`;
    const NG_URL = `${process.env.STORYBOOK_ANGULAR_URL}?path=/docs/component-${sbMenuCategory}-${componentPath}--a-${componentPath}`;

    return (
        <div className="nexus-end-md nexus-center-xs">
            <div className="nexus-row">
                <div className="nexus-col-xs-4">
                    <a href={WC_URL} target="_blank" rel="noopener noreferrer" className={primaryFW === 'stencil' ? "nexus-btn nexus-btn-primary": "nexus-btn"}>Javascript</a>
                    <a href={NG_URL} target="_blank" rel="noopener noreferrer" className={primaryFW === 'angular' ? "nexus-btn nexus-btn-primary": "nexus-btn"}>Angular</a>
                    <a href={REACT_URL} target="_blank" rel="noopener noreferrer" className={primaryFW === 'react' ? "nexus-btn nexus-btn-primary": "nexus-btn"}>React</a>
                </div>
            </div>
        </div>
    );
}

export default ContentSwitcher;