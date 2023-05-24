import React from 'react';
import '../../styles.scss';


const Initial: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h3'>Flex Grow and Shrink</span>
            <hr className='underline' />
            <span className='nexus-h4'>Initial</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-initial</code> to allow a flex item to shrink but not grow, taking into account its initial size:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div className="nexus-flex-initial">Short</div>
                    <div className="nexus-flex-initial">Medium length content</div>
                    <div className="nexus-flex-initial">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit)</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
    <div class="nexus-flex-initial">Short</div>
    <div class="nexus-flex-initial">Medium length content</div>
    <div class="nexus-flex-initial">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default Initial;