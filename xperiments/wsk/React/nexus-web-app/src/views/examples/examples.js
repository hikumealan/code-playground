import React from 'react';
import { Link } from 'react-router-dom';

const Examples = () => (
    <section className="nexus-container">
        <div className="nexus-row">
            <div className="nexus-col-xs-4">
                <h1>Examples</h1>
                <h3>Account Summary</h3>
                <Link to="/examples/account">Account Summary</Link>
                <h3>Sign Up</h3>
                <Link to="/examples/signup">Sign Up</Link>
            </div>
        </div>
    </section>
);

export default Examples;
