import React from 'react';
import '../../styles.scss';


const FlexColReversedDirection: React.FC = () => {

    return (
        <section className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
            <span className='nexus-h4'>Flex Column Reverse Direction</span>
            <p dangerouslySetInnerHTML={{ __html: `Use <code>nexus-flex-col-reverse</code> to position flex items vertically in the opposite direction:` }}></p>

            <div className='flex-examples'>
                <div className="nexus-flex-col-reverse">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {`<div class="nexus-flex-col-reverse">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>`}
                </code>
            </pre>
        </section>
    );
}

export default FlexColReversedDirection;