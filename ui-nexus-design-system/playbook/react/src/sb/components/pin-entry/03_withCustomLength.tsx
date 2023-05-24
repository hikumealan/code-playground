import React from "react";
import { NexusPinEntry } from "@nexus/react";

const WithCustomLengthComponent: React.FC = () => {
    return(
        <div className="nexus-center-xs nexus-mt-5">
            <NexusPinEntry type='tel' length={6}></NexusPinEntry>
        </div>
    )
}

export default WithCustomLengthComponent;