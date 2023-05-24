import React from 'react';
import '../../styles.scss';

const MediumGrid = () => {
    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
            <span className='nexus-h3'>Medium Grid</span>
            <hr className='underline' />

            <span className='nexus-h5'>HTML Usage</span>
            <p>Next, you fill this row with the columns:</p>

            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-md-1 highlight-grid-bg">
                    <div>1 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-7 highlight-grid-bg">
                    <div>7 of 8</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-md-3 highlight-grid-bg">
                    <div>3 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-5 highlight-grid-bg">
                    <div>5 of 8</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-md-4 highlight-grid-bg">
                    <div>4 of 8</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-md-4 highlight-grid-bg">
                    <div>4 of 8</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-md-8 highlight-grid-bg">
                    <div>8 of 8</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {
                        `
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-md-1">
        <div>1 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-7">
        <div>7 of 8</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-md-3">
        <div>3 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-5">
        <div>5 of 8</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-md-4">
        <div>4 of 8</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-md-4">
        <div>4 of 8</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-md-8">
        <div>8 of 8</div>
    </div>
</div>
                        `
                    }
                </code>
            </pre>
        </section>
    )
}

export default MediumGrid;