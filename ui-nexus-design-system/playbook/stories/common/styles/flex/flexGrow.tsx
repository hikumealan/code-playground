import React from 'react';
import '../../styles.scss';


const FlexGrow: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h5'>Grow</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-shrink</code> to allow a flex item to shrink if needed:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div className="nexus-flex-none">Short</div>
                    <div className="nexus-flex-grow">Medium length content</div>
                    <div className="nexus-flex-none">Short</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
    <div class="nexus-flex-none">Short</div>
    <div class="nexus-flex-grow">Medium length content</div>
    <div class="nexus-flex-none">Short</div>
</div>`}
                </code>
            </pre>


            <span className='nexus-h5'>Don't Grow</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-shrink-0</code> to prevent a flex item from shrinking:` }}></p>

            <div className='flex-examples'>

                <div className="nexus-flex-row">
                    <div className="nexus-flex-grow">Short</div>
                    <div className="nexus-flex-grow-0">Medium length content</div>
                    <div className="nexus-flex-grow">Short</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`div class="nexus-flex-row">
<div class="nexus-flex-grow">Short</div>
<div class="nexus-flex-grow-0">Medium length content</div>
<div class="nexus-flex-grow">Short</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default FlexGrow;