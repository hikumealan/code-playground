import React from 'react';
import '../../styles.scss';

const ExtraLarge = () => {
    return (
        <section className='nexus-col-xs-4 nexus-mt-4'>
            <span className='nexus-h3'>Extra Grid</span>
            <hr className='underline' />

            <span className='nexus-h5'>HTML Usage</span>
            <p>Next, you fill this row with the columns:</p>

            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-xl-1 highlight-grid-bg">
                    <div>1 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-11 highlight-grid-bg">
                    <div>11 of 12</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-xl-3 highlight-grid-bg">
                    <div>3 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-9 highlight-grid-bg">
                    <div>9 of 12</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-xl-6 highlight-grid-bg">
                    <div>6 of 12</div>
                </div>
                <div className="nexus-col-xs-4 nexus-col-xl-6 highlight-grid-bg">
                    <div>6 of 12</div>
                </div>
            </div>
            <div className="nexus-row">
                <div className="nexus-col-xs-4 nexus-col-xl-12 highlight-grid-bg">
                    <div>12 of 12</div>
                </div>
            </div>

            <pre>
                <code className="language-html">
                    {
                        `
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-xl-1">
        <div>1 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-11">
        <div>11 of 12</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-xl-3">
        <div>3 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-9">
        <div>9 of 12</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-xl-6">
        <div>6 of 12</div>
    </div>
    <div class="nexus-col-xs-4 nexus-col-xl-6">
        <div>6 of 12</div>
    </div>
</div>
<div class="nexus-row">
    <div class="nexus-col-xs-4 nexus-col-xl-12">
        <div>12 of 12</div>
    </div>
</div>
                        `
                    }
                </code>
            </pre>
        </section>
    )
}

export default ExtraLarge;