import React from 'react';
import '../../styles.scss';


const FlexShrink: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h5'>Shrink</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-shrink</code> to allow a flex item to shrink if needed:` }}></p>

            <div className='flex-examples'>
                <div className=" nexus-flex-row">
                    <div className="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
                    <div
                        className="nexus-flex-shrink">Medium length content</div>
                    <div className="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class=" nexus-flex-row">
    <div class="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
    <div class="nexus-flex-shrink">Medium length content</div>
    <div class="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)
    </div>
</div>`}
                </code>
            </pre>


            <span className='nexus-h5'>Don't Shrink</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-shrink-0</code> to prevent a flex item from shrinking:` }}></p>

            <div className='flex-examples'>
                <div className=" nexus-flex-row">
                    <div className="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
                    <div
                        className="nexus-flex-shrink">Medium length content</div>
                    <div className="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class=" nexus-flex-row">
    <div class="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
    <div class="nexus-flex-shrink">Medium length content</div>
    <div class="nexus-flex-grow">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default FlexShrink;