import React from 'react';
import '../../styles.scss';


const Auto: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h4'>Auto</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-auto</code> to allow a flex item to grow and shrink, taking into account the initial size:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-row">
                    <div className="nexus-flex-auto">Short</div>
                    <div className="nexus-flex-auto">Medium length content</div>
                    <div className="nexus-flex-auto">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-row">
<div class="nexus-flex-auto">Short</div>
<div class="nexus-flex-auto">Medium length content</div>
<div class="nexus-flex-auto">Large amount of text (Lorem ipsum dolor sit amet, consectetur adipisicing
elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem)</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default Auto;