import React, { useState } from 'react';
import reactCSS from 'reactcss';
import SketchPicker from 'react-color';

const ColorPicker: React.FC<{ title: string, hexColor: string, sassKey: string }> = ({ hexColor, sassKey }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const styles = reactCSS({
        'default': {
            color: {
                width: '120px',
                height: '72px',
                borderRadius: '2px',
                background: `${hexColor}`,
            },
            swatch: {
                padding: '4px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
                margin: '8px'
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    return (
        <div className='nexus-row'>
            <div className='nexus-col-xs-4 nexus-mt-2 nexus-mb-2'>
                <div style={styles.swatch} onClick={() => handleClick()}>
                    <div style={styles.color} />
                </div>
                {displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={() => handleClose()} />
                    <SketchPicker color={hexColor} />
                </div> : null}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className='nexus-body nexus-mt-1'>{sassKey}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className='nexus-body nexus-mt-1'>{hexColor}</span>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;