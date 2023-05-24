import React from "react";
import BasePageLayout from "../component/layout/layout";
import '../styles.scss';

import setupSketchAc from "../../assets/setup_sketch_ac.png";
import joinSketchWorkspace from "../../assets/join_sketch_workspace.png";
import useSketchNdsLibrary from "../../assets/use_sketch_nds_library.png";
import useSketchNdsLibraryTwo from "../../assets/use_sketch_nds_library_1.png";
import useSketchNdsLibraryThree from "../../assets/use_sketch_nds_library_2.png";
import useSketchNdsLibraryFour from "../../assets/use_sketch_nds_library_3.png";
import sketchSymbols from "../../assets/sketch_symbols.png";
import sketchStructure from "../../assets/sketch_structure.png";
import sketchNestedSymbols from "../../assets/sketch_nested_symbols.png";
import sketchNdsTextStyles from "../../assets/sketch_nds_text_styles.png";
import sketchNdsTextStylesTwo from "../../assets/sketch_nds_text_styles_1.png";
import sketchNdsLayoutSettings from "../../assets/sketch_nds_layout_settings.png";


export const SketchPage: React.FC = () => {
  const createOrderedList = (inputData) => inputData.map(
    (extension, idx) => <li key={idx}><a className='link' href={extension.link}>{extension.name}</a></li>
  );

  return (
    <BasePageLayout bannerHeader="Sketch Guidance">
      <div className="nexus-container">
        <div className="nexus-mt-3 nexus-body">
          <section className="nexus-row nexus-around-md">
            <div className="nexus-col-xs-4">
              <span className="nexus-h3">How to access the Sketch Nexus Design System library...</span>
              <hr className="underline" />
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Joining Sketch XDA team's Workspace (for Editors and Viewers)</span><br /></p>
                <p className="nexus-h6">1. Use this link <a className='link' href="https://forms.office.com/pages/responsepage.aspx?id=mT-XW99360uyfaoMcLhILEM42_WD8NtNh3a8HjjvdUpUOVJUUkoxRU5XQTY5MjdaTENIR1hJTzJTSCQlQCN0PWcu">XDA-Sketch-workspace</a> to request access.
                  <br />
                  2. Once you received the email invite, Click on Join Accept invitation.</p>
                <p>(See images below)</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={joinSketchWorkspace} alt="Join sketch workspace" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p className="nexus-h6">3. Setup Sketch account</p>
                <p>
                  <ul className="sketch-ul">
                    <li><span className="nexus-h6">A: Users with a Sketch account - Sign in: </span>If you already have a Sketch account tied to your invited email address, you should be able to sign right in and access XDA Workspace.</li>
                    <li><span className="nexus-h6">B: Users without a Sketch account - Create an Account:</span> If you don't have a Sketch account, you'll need to set one up by clicking Create an Account at the bottom of your screen. Follow the prompts to create your username and password combination, and then set up your profile until you reach your XDA workspace.</li>
                  </ul>
                  <br />
                </p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={setupSketchAc} alt="Setup sketch ac" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p>If you are a Viewer in your Workspace, you’ll be all set at this point — there’s no need to take further action.</p>
                <br />
                <p className="nexus-h5">Signing in to Sketch, the Mac app (for Editors only)</p>
                <p>Mac-only License Users - Replacing your old license key with your Sketch account.</p>
                <p>For further details Follow this Sketch <a className='link' href="https://sketch-public.notion.site/Team-Onboarding-95986b9bbb0c434bbd69abd792cc192f">Team onboarding</a> process.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">How to use the Nexus Design System Component Library as a Sketch Library</span><br /></p>
                <p>Download the <a className='link' href="#">Nexus-Design-System-Sketch File</a>,<br />
                  Once you have the file downloaded, you will need to navigate to the Libraries tab under Preferences. Look for all of your current Sketch Libraries using the following.
                </p>
                <p><span className="nexus-h5">Path: Sketch &gt; Preferences &gt; Libraries. </span><br /></p>
                <p>(see images below)</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={useSketchNdsLibrary} alt="Use sketch nds library" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p>Add the Sketch Design System file as a library by clicking on “Add Library” and then choosing “Nexus Design System”.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={useSketchNdsLibraryTwo} alt="Use sketch NDS library" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p>then choose the downloaded “Nexus Design System v 1.2.4.sketch file”.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={useSketchNdsLibraryThree} alt="Use sketch Nds library three" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p>You should then see “Nexus Design System v 1.2.4 library installed successfully!”</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={useSketchNdsLibraryFour} alt="Use sketch Nds library four" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Symbols</span><br /></p>
                <p>Nexus components live in the design kit as Sketch symbols.</p>
                Library menu navigation
                <p>There are two kinds of symbols — library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.</p>
                <p>From the main menu select Insert → Symbols → Nexus Design System then select the desired symbol to add onto your page.</p>
                <p>Nexus symbols are built to be flexible, and designers should not detach symbols from the library. Once a symbol is detached, you will no longer receive updates as they are released.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchSymbols} alt="Sketch symbols" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Structure</span><br /></p>
                <p>
                  Symbols are organized by component; after selecting a component, you’ll see the variations and states of that component.</p>
                <p>
                  To add the whole component, select the desired variant and place it on your art-board.
                </p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchStructure} alt="Sketch structure" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5"> Nested Symbols</span><br /></p>
                <p>
                  Sketch Symbols allow you to use and reuse a self-contained design element across a Sketch document. Any changes made to a symbol will update across your whole document. Nested symbols allow for even more customization, without breaking the symbol from its source, by adding symbols inside other symbols. These nested symbols are used throughout the Sketch file so that you can customize your designs as much as possible without detaching your symbol.
                </p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">See Nested Symbols in Action</span><br /></p>
                <p>Open any Sketch document and insert a symbol by following the path: Insert {">"} Symbols {">"} Nexus Design System Desktop Style Guide.</p>
                <p>In Sketch’s right side panel, you’ll see the overrides or customizations you can make to the symbol without having to detach the symbol. Keeping the symbol in tact allows you the benefit of the automatic update feature. </p>
                <p>Tip: Use symbols as a base for your project (do not detach). Use overrides to customize a specific symbol, then create a new symbol with your desired override as a symbol specific to your project.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchNestedSymbols} alt="Sketch nested symbols" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Nexus Design System Layer Styles</span><br /></p>
                <p>Layer Styles are heavily used across the Nexus Design System style guide. We’ve built and organized them within a section on the symbols page within the Sketch file.</p>
                <p>You will be given a selection of backgrounds with outlines on specific sides or choose from various pre-defined colors from the color palette.</p>
                <p>Tip: We highly recommend you use a layer style color instead of the color palette. By doing this, you will be able to update all instances of the color if the color changes.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Nexus Design System Text Styles</span></p>
                <p>Text Styles are also widely used across the Nexus Design System style guide.</p>
                <p>We recommend you use text styles when creating your designs. Using this method will help you manage the text throughout your document and will help save you time if you need to change the text style.</p>
                <br />
                <p><span className="nexus-h5">Access Nexus Design System Text style. </span></p>
                <p>(see images below)</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchNdsTextStyles} alt="Sketch Nds text styles" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchNdsTextStylesTwo} alt="Sketch Nds text styles" />
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <p><span className="nexus-h5">Nexus Design System Layout Settings</span><br /></p>
                <p>The following images are examples of how your Sketch file should be set up.</p>
              </div>
            </div>
          </section>

          <section className="nexus-row nexus-around-md nexus-mt-3">
            <div className="nexus-col-xs-4">
              <div className="nexus-pt-2 nexus-pb-2">
                <img src={sketchNdsLayoutSettings} alt="Use sketch Nds library four" />
              </div>
            </div>
          </section>

        </div>
      </div >
    </BasePageLayout >
  );
}
