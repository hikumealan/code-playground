import React from "react";
import { references, browserExtentions, colorContrast } from '../../data/accessibility/accessibility';
import BasePageLayout from "../component/layout/layout";
import '../styles.scss';
import ExternalLink from '@nexus/core/dist/assets/icons/content/ic_link_24px.svg';
import { NexusIcon } from "@nexus/react";


export const AccessibilityPage: React.FC = () => {
    const createOrderedList = (inputData) => inputData.map(
        (extention, idx) => <li key={idx}><a className='link' href={extention.link}>{extention.name}</a></li>
    );

    return (
        <BasePageLayout bannerHeader="Accessibility Guidance">
            <div className="nexus-container">
                <div className="nexus-mt-3 nexus-body">
                    <section className="nexus-row nexus-around-md">
                        <div className="nexus-col-xs-4">
                            <p>Nexus follows the Web Content Accessibility Guidelines (WCAG) - please reference the additional resources below for more information.</p>
                            <span className="nexus-h3">Accessibility Guidelines and Documentation</span>
                            <hr />
                            {references.map(
                                (guideLine, idx) => (
                                    <div className="nexus-pt-2 nexus-pb-2" key={idx}>
                                        <a href={guideLine.link} className="link nexus-h4">{guideLine.header} <NexusIcon src={ExternalLink}></NexusIcon></a>
                                        <p>{guideLine.description}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <span className="nexus-h3">Automated Testing Tool</span>
                            <hr />
                            <p>The <a className='link' href="https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US">Axe Accessibility Checker</a> is a fast, lightweight accessibility testing tool the returns zero false positives. It only tests for accessibility issues that can be accurately detected via automation, and it only tests for components that actually exist on the page or application being tested. The axe Chrome extension utilizes the axe open source JavaScript library developed by Deque Systems - the third generation of accessibility rules for HTML-based user interfaces.</p>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <span className="nexus-h3">Additional Browser Extensions for Accessibility Assessments</span>
                            <hr />
                            <ol>
                                {createOrderedList(browserExtentions)}
                            </ol>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <span className="nexus-h3">Color Contrast and Font Size Accessibility Assessments</span>
                            <hr />
                            {createOrderedList(colorContrast)}
                        </div>
                    </section>
                </div>
            </div>
        </BasePageLayout>
    );
}