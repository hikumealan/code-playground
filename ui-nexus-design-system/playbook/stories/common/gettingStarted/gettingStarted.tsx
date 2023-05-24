import React, { useEffect } from 'react';
import Prism from 'prismjs';
import BasePageLayout from '../component/layout/layout';


const GettingStartedPage: React.FC = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
        <BasePageLayout bannerHeader='Setup Guide'>
            <section className='nexus-container nexus-body'>
                <div className='nexus-row'>
                    <div className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
                        <span className='nexus-h3'>Installation</span>
                        <hr className='underline nexus-mb-2' />
                        <ol>
                            <li>Click the <a className="link" href="https://fso-to.visualstudio.com/Nexus%20for%20Banking/_packaging?_a=package&feed=Nexus&view=overview&package=%40nexus%2Fcore&protocolType=Npm">link</a> below to navigate to the Azure projects artifact feed. </li>
                            <li>
                                Follow the instructions to "Connect to feed". Example .npmrc file:
                                <pre>
                <code className="language-html">
                    {`registry=https://registry.npmjs.org/
@nexus:registry=https://fso-to.pkgs.visualstudio.com/7bc545d8-bf8c-477e-bb91-17a982c30c2e/_packaging/Nexus/npm/registry/
@ey-studio-phl:registry=https://npm.ey-intuitive.com

always-auth=true
save-exact=true

<Your Auth Token Here>`}
                </code>
            </pre>
                            </li>
                            <li>Install the package using the command <code>yarn add @nexus/core</code> or <code>npm i @nexus/core</code></li>
                        </ol>
                    </div>
                    <div className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
                    <span className='nexus-h3'>HTML Setup</span>
                        <hr className='underline nexus-mb-2' />
                        <p>Example of pulling packages from node modules:</p>
                        <pre>
                <code className="language-html">
                    {`<html lang="en">
<head>
    <script type="module" src="./node_modules/@nexus/core/dist/nexus/nexus.esm.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="./node_modules/@nexus/core/dist/nexus/nexus.css">
</head>

<body class="nexus">
    <nexus-input></nexus-input>
</body>
</html>`}
                </code>
            </pre>
                    </div>
                    <div className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
                    <span className='nexus-h3'>Public Styles</span>
                        <hr className='underline nexus-mb-2' />
                        <p>The default styles for the application live in the src/styles/_default.scss file. In particular, the parent default app styles - with the class selector .nexus, will target anything that is a lower in the class hierarchy. In order to make these styles available for your application, you must add the class nexus to the public html file of your respective app(s).</p>
                        <pre>
                <code className="language-html">
                    {`<body class="nexus">
    ...
</body>`}
                </code>
            </pre>
                    </div>
                    <div className='nexus-col-xs-4 nexus-mt-4 nexus-mb-4'>
                    <span className='nexus-h3'>SCSS</span>
                    <p>If you are using scss you can import @nexus/core/dist/styles into your .scss. instead of importing the css file.</p>
                    <pre>
                <code className="language-html">
                    {`$nexus-font-path: '~@nexus/core/dist/assets/fonts';

@import '~@nexus/core/dist/styles';`}
                </code>
            </pre>
                    </div>
                </div>
            </section>
        </BasePageLayout>
    )
}

export default GettingStartedPage;