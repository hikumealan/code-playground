import React from 'react';
import '../../styles.scss';


const FlexDirection: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h3'>Usage</span>
            <hr className='underline' />
            <span className='nexus-h4'>Flex Direction</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-row</code> to position flex items horizontally in the same direction as text:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default FlexDirection;