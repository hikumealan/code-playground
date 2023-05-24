import React from 'react';
import '../../styles.scss';


const None: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h4'>None</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-none</code> to prevent a flex item from growing or shrinking:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div className="nexus-flex-1">Item that can grow or shrink as needed</div>
                    <div className="nexus-flex-none">Item that cannot grow or shrink</div>
                    <div className="nexus-flex-1">Item that can grow or shrink as needed</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
    <div class="nexus-flex-1">Item that can grow or shrink as needed</div>
    <div class="nexus-flex-none">Item that cannot grow or shrink</div>
    <div class="nexus-flex-1">Item that can grow or shrink as needed</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default None;