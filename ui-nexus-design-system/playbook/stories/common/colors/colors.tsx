import React from "react";
import colorList from '../../../../tmp/colorVariables.json';
import ColorPicker from "../component/colorPicker/colorPicker";
import BasePageLayout from "../component/layout/layout";


const ColorsPage: React.FC = () => {
    return (
        <BasePageLayout bannerHeader="Color Palette">
            <div className="nexus-container">
                <div className="nexus-row nexus-around-xs">
                    <div className="nexus-col-xs-4">
                        {colorList.map((colors, idx) =>
                            <div key={idx} className='nexus-pt-2 nexus-pb-2'>
                                <div className="nexus-pt-2 nexus-pb-2">
                                    <div className="nexus-h3">{colors.title}</div>
                                    <hr className="underline" />
                                </div>
                                {Object.entries(colors.colors).map(([color, colorDetail], idy) => (
                                    <div key={idy}>
                                        <div className="nexus-row nexus-sround-xs">
                                            {Object.entries(colorDetail).map(([key, value], idz) => (
                                                <div key={idz}>
                                                    <ColorPicker title={color} hexColor={value.toString()} sassKey={key} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BasePageLayout>
    )
}

export default ColorsPage;