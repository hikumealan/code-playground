import React from 'react';
import '../../styles.scss';


const FlexOne: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h4'>Flex 1</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-1</code> to allow a flex item to grow and shrink as needed, ignoring the initial size:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div className="nexus-flex-1">Short</div>
                    <div className="nexus-flex-1">Medium length content</div>
                    <div className="nexus-flex-1">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.)</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
    <div class="nexus-flex-1">Short</div>
    <div class="nexus-flex-1">Medium length content</div>
    <div class="nexus-flex-1">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default FlexOne;