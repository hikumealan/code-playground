import React from "react";
import { types } from '../../data/typography/typography';
import BasePageLayout from "../component/layout/layout";


const TypographyPage: React.FC = () => {

    return (
        <BasePageLayout bannerHeader="Typography">
            <div className="nexus-container nexus-body">
                <div className="nexus-row nexus-around-md">
                    <div className="nexus-col-xs-4">
                        <span className="nexus-h3">Import Fonts</span>
                        <hr className="underline"/>
                        <p>Use the following variable to customize the Nexus Font Path</p>
                        <pre>
                            <code>
                                $nexus-font-path: 'node_modules/@nexus/core/dist/assets/fonts';
                            </code>
                        </pre>
                    </div>
                </div>

                <div style={{ marginBottom: '32px' }}></div>
                <div className="nexus-row nexus-around-md">
                    <div className="nexus-col-xs-4">
                        <span className="nexus-h3">Usage</span>
                        <hr className="underline" />
                        <div style={{ marginBottom: '32px' }}></div>
                        {
                            types.map((type, idx) => (
                                <div key={idx} style={{
                                    borderStyle: 'solid',
                                    borderColor: '#EAEBEB',
                                    borderBottom: '2px 0',
                                    borderLeft: '0',
                                    borderRight: '0',
                                    borderTop: '0',
                                    marginTop: '16px',
                                    paddingBottom: '64px'
                                }}>
                                    <span className="nexus-h5">{type.name}</span>
                                    <p className="nexus-body-sm">{type.details}</p>
                                    <span className={type.class}>{type.text}</span>
                                    {/* <hr style={{ margin: '48px 0' }} /> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </BasePageLayout>
    )
}

export default TypographyPage;