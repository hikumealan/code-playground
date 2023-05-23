import React, { useEffect, useState } from 'react';

const Test = () => {
    const [renderError, setRenderError] = useState(false);

    useEffect(() => {
        if (renderError) {
            throw new Error();
        }
    });

    return (
        <section className="nexus-container">
            <div className="nexus-row">
                <div className="nexus-col-xs-4">
                    <h2>Development Tests</h2>
                </div>
                <div className="nexus-col-xs-4">
                    <h3>
                        Test JS Event Error - Simulate error thrown due to improperly handled
                        interaction event
                    </h3>
                    <button className="nexus-btn nexus-btn-warn" onClick={() => null.error}>
                        Trigger Event Error
                    </button>
                </div>
                <div className="nexus-col-xs-4">
                    <h3>Test Render Error - Simulate error thrown during rendering phase</h3>
                    <button
                        className="nexus-btn nexus-btn-warn"
                        onClick={() => setRenderError(true)}
                    >
                        Trigger Render Error
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Test;
