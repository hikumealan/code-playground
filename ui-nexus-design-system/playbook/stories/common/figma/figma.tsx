import React from "react";
import BasePageLayout from "../component/layout/layout";
import '../styles.scss';
import RequestFigmaViewerForm from "../../assets/request_figma_viewer_form.png";
import RequestFigmaEditorForm from "../../assets/request_figma_editor_form.png";
import TurnOnFigmaNdsLibraries from "../../assets/trunon_figma_nds_libraries.png";
import TurnOnFigmaNdsLibrariesTwo from "../../assets/trunon_figma_nds_libraries_1.png";
import figmaAssetsTab from "../../assets/figma_assetstab.png";
import figmaAssetsTabTwo from "../../assets/figma_assetstab_1.png";
import figmaComponentProperties from "../../assets/figma_component_properties.png";
import figmaVariantsDes from "../../assets/figma_variants_des.png";


export const FigmaPage: React.FC = () => {
    const createOrderedList = (inputData) => inputData.map(
        (extention, idx) => <li key={idx}><a className='link' href={extention.link}>{extention.name}</a></li>
    );

    return (
        <BasePageLayout bannerHeader="Figma Guidance">
            <div className="nexus-container">
                <div className="nexus-mt-3 nexus-body">
                    <section className="nexus-row nexus-around-md">
                        <div className="nexus-col-xs-4">
                            <span className="nexus-h3">How to use the Nexus Design System Component Library in Figma</span>
                            <hr className="underline" />
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">Get the libraries (Internal users)</span></p><br />
                                <p><span className="nexus-h5">1. Request for figma viewer and editor access.</span></p>

                                <p>There are two types of licenses you can request. The first is for a free ‘Viewer’ license which is for product team members, stakeholders and developers.  The other request is an ‘Editor’ license at cost to the engagement or product team and requires approval from a manager.  Editor licenses are typically reserved for UX Designers.</p>

                                <p>For Figma <b>Viewer</b> (Developers, product team, stakeholders) license requests use this link
                                    <br />
                                    <a className='link' href="https://sites.ey.com/sites/EY_Figma_License_requests/SitePages/EY-Figma.aspx">EY-Figma-Viewer</a></p>

                                <p>Use the below guide to fill in the form questions below for <b>Viewer</b> request:</p>
                            </div>
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={RequestFigmaViewerForm} alt="Request Figma Viewer Form" />
                            </div>

                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <p>For Figma <b>Editor</b> (UX Designers) license requests: <a className='link' href="https://sites.ey.com/sites/EY_Figma_License_requests/SitePages/EY-Figma.aspx"> EY-Figma-Editor</a></p>
                            <p><span className="nexus-h6">Note: Costs are distributed back to the member firm and requires a manager approval sent to John.M.Christiana@ey.com</span></p>
                            <p>Follow these steps:</p>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={RequestFigmaEditorForm} alt="Request Figma Editor Form" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">2. Once you get approved access, sign in with your EY SSO credentials.</span><br /></p>
                                <p>If you are signed into Figma via EY SSO credentials. You can access the Nexus Design System libraries.</p>
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">3. Turn on the Nexus Design system libraries</span></p>
                                <p>There are two Nexus Design System libraries, one is for Nexus Design System components library and other one is nexus icon library. You can turn on as many libraries as you’d like. The nexus design system libraries are now available to Nexus internal users. </p>
                                <p>Path: Inside of a design file  &gt; Main  menu  &gt; Libraries</p>
                                <p>(See images below)</p>
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={TurnOnFigmaNdsLibraries} alt="Turn on Figma Nds Libraries" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p>In the Libraries modal , turn on the toggle switch next to the Nexus Design system Libraries for the Library file to be used.</p>
                            </div>
                        </div>
                    </section>


                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={TurnOnFigmaNdsLibrariesTwo} alt="Turn on Figma Nds Libraries" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">Assets tab</span><br /></p>
                                <p>Now you can use Nexus Design System Components using Assets tab. This library is synced with the main Nexus Design System library and will be kept up to date.</p>
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={figmaAssetsTab} alt="Figma Assets Tab" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p>Each section contains Nexus Design System components that can be added to your page.</p>
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={figmaAssetsTabTwo} alt="Figma Assets Tab" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">Component properties </span></p>
                                <p>Each component can be adjusted as a variant in the right hand panel.</p>
                            </div>
                        </div>
                    </section>



                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={figmaComponentProperties} alt="Figma Component Properties" />
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <p><span className="nexus-h5">Variants description</span></p>
                                <p>Some Component Variants have “How to use Description ” to help you effectively use the component.</p>
                            </div>
                        </div>
                    </section>

                    <section className="nexus-row nexus-around-md nexus-mt-3">
                        <div className="nexus-col-xs-4">
                            <div className="nexus-pt-2 nexus-pb-2">
                                <img src={figmaVariantsDes} alt="Figma Component Properties" />
                            </div>
                        </div>
                    </section>

                </div>
            </div >
        </BasePageLayout >
    );
}
