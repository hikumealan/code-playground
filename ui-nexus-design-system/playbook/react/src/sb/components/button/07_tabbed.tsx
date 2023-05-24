import React from "react";
import { tabbed } from "../../constants";
import { NexusIcon } from "@nexus/react";

const TabbedComponent: React.FC = () => (
    <div className="nexus-row nexus-body">
        <div className="nexus-col-xs-4">
            <div className="nexus-center-xs nexus-mt-3">
                <button className="nexus-btn nexus-btn-medium nexus-btn-primary nexus-overline">
                    <NexusIcon src={tabbed.micIconSrc} size="md"></NexusIcon>
                    {tabbed.on}
                </button>
                <button className="nexus-btn nexus-btn-medium nexus-overline">
                    <NexusIcon src={tabbed.micOffIconSrc} size="md"></NexusIcon>
                    {tabbed.off}
                </button>
            </div>
        </div>
        <div className="nexus-col-xs-4">
            <div className="nexus-center-xs nexus-mt-2">
                <button
                    className="nexus-btn nexus-btn-medium nexus-overline"
                    style={{ backgroundColor: tabbed.successColor, color: tabbed.textColor, border: `1px solid ${tabbed.successColor}` }}
                >
                    <NexusIcon src={tabbed.showIconSrc} size="md"></NexusIcon>
                    {tabbed.show}
                </button>
                <button className="nexus-btn nexus-btn-medium nexus-btn-warn nexus-overline">
                    <NexusIcon src={tabbed.hideIconSrc} size="md"></NexusIcon>
                    {tabbed.hide}
                </button>
            </div>
        </div>
    </div>
)

export default TabbedComponent;