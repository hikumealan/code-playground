import React from "react";
import BasePageLayout from "../component/layout/layout";
import '../styles.scss';

import fontGuide from "../../assets/font_guide.png";
import fontGuideTwo from "../../assets/font_guide_1.png";
import ExternalLink from '@nexus/core/dist/assets/icons/alert/ic_warning_24px.svg';
import { NexusIcon } from "@nexus/react";


export const FontPage: React.FC = () => {
  const createOrderedList = (inputData) => inputData.map(
    (extension, idx) => <li key={idx}><a className='link' href={extension.link}>{extension.name}</a></li>
  );

  return (
    <BasePageLayout bannerHeader="Font Guidance">
      <div className="nexus-container">
        <div className="nexus-mt-3 nexus-body">
          <section className="nexus-row nexus-around-md">
            <div className="nexus-col-xs-4">
              <span className="nexus-h3">How to use the Nexus Font</span>
              <hr className="underline" />
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Nexus uses the  typeface “Interstate”.</span><br /></p>
                <p><NexusIcon style={{
                  color: '#FF8733',
                  position: 'relative',
                  top: '6px'
                }} src={ExternalLink}></NexusIcon><span className="nexus-h6">Note: EY Interstate and Interstate are different and that for Nexus they should only be using 'Interstate'.</span></p>
                <p>
                  <ol>
                    <li className="nexus-h6">Download the Nexus Fonts file <a className='link' href="#">Interstate.zip</a></li>
                    <li className="nexus-h6">Once you have the file downloaded, you can install the fonts on your Mac or Windows machine.</li>
                    <li className="nexus-h6">Now in figma and sketch you change your fonts to “Interstate”</li>
                  </ol>
                </p>
                <p><span className="nexus-h6">Figma Path : Right side panel &gt; design</span></p>
                <p>(See images below)</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={fontGuide} alt="Request Font Editor Form" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h6">Sketch Path : Right side panel (inspector)</span></p>
                <p>(See images below)</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={fontGuideTwo} alt="Request Font Editor Form" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h6">How to install fonts on Mac and Windows</span>
                </p>
                <p><span className="nexus-h6">Follow below links</span></p>
                <p><span className="nexus-h6">Mac -</span><br />
                  <a className='link' href="https://support.apple.com/en-us/HT201749">https://support.apple.com/en-us/HT201749</a>
                </p>
                <p><span className="nexus-h6">Windows - </span><br />
                  <a className='link' href="https://support.microsoft.com/en-us/office/add-a-font-b7c5f17c-4426-4b53-967f-455339c564c1">Xhttps://support.microsoft.com/en-us/office/add-a-font-b7c5f17c-4426-4b53-967f-455339c564c1</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div >
    </BasePageLayout >
  );
}
