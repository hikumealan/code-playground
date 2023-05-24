import React from 'react';
import '../../styles.scss';

const SmallGrid = () => {
    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
            <span className='nexus-h3'>Small Grid</span>
            <hr className='underline' />

            <span className='nexus-h5'>HTML Usage</span>
            <p>Next, you fill this row with the columns:</p>

            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-sm-1 highlight-grid-bg">
                    <div>1 of 4</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-sm-1 highlight-grid-bg">
                    <div>1 of 4</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-sm-1 highlight-grid-bg">
                    <div>1 of 4</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-sm-1 highlight-grid-bg">
                    <div>1 of 4</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-sm-1 highlight-grid-bg">
                    <div>1 of 4</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-sm-3 highlight-grid-bg">
                    <div>3 of 4</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-sm-2 highlight-grid-bg">
                    <div>2 of 4</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-sm-2 highlight-grid-bg">
                    <div>2 of 4</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-sm-4 highlight-grid-bg">
                    <div>4 of 4</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {
                        `
<div className="nexus-row">
    <div className="nexus-col-xs-4 nexus-col-sm-1">
        <div>1 of 4</div>
    </div>
    <div className="nexus-col-xs-4 nexus-col-sm-1">
        <div>1 of 4</div>
    </div>
    <div className="nexus-col-xs-4 nexus-col-sm-1">
        <div>1 of 4</div>
    </div>
    <div className="nexus-col-xs-4 nexus-col-sm-1">
        <div>1 of 4</div>
    </div>
</div>
<div className="nexus-row">
    <div className="nexus-col-xs-4 nexus-col-sm-1">
          <div>1 of 4</div>
    </div>
    <div className="nexus-col-xs-4 nexus-col-sm-3">
        <div>3 of 4</div>
    </div>
</div>
<div className="nexus-row">
    <div className="nexus-col-xs-4 nexus-col-sm-2">
        <div>2 of 4</div>
    </div>
    <div className="nexus-col-xs-4 nexus-col-sm-2">
        <div>2 of 4</div>
    </div>
</div>
<div className="nexus-row">
    <div className="nexus-col-xs-4 nexus-col-sm-4">
        <div>4 of 4</div>
    </div>
</div>
                        `
                    }
                </code>
            </pre>
        </section>
    )
}

export default SmallGrid;