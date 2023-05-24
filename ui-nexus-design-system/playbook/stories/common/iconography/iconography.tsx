import React, { useState, useEffect } from 'react';
import { NexusFormField, NexusIcon, NexusInput, NexusMenu, NexusMenuItem } from '@nexus/react';
import '../styles.scss'
import Icons from '../../../../tmp/icons.json';
import BasePageLayout from '../component/layout/layout';
import IcEmail from '@nexus/core/dist/assets/icons/action/ic_search_24px.svg';

const IconographyPage: React.FC = () => {
    const groupIconsByFolder = {};
    Icons.forEach(
        (iconDetails) => {
            iconDetails.forEach(
                (iconInfo) => {
                    if (iconInfo.folder in groupIconsByFolder) {
                        groupIconsByFolder[iconInfo.folder].push({
                            name: iconInfo.name,
                            filepath: iconInfo.filepath,
                            content: iconInfo.content,
                        });
                    } else {
                        groupIconsByFolder[iconInfo.folder] = [{
                            name: iconInfo.name,
                            filepath: iconInfo.filepath,
                            content: iconInfo.content,
                        }]
                    }
                }
            )
        }
    );

    const [open, setOpen] = useState(false);
    const [iconDetails, setIconDetails] = useState<{
        name: string,
        content: string,
        filepath: string,
        folder: string
    }>(
        {
            name: '',
            content: '',
            filepath: '',
            folder: ''
        });
    const [searchTerm, setSearchTerm] = useState('');
    const [iconsList, setIconsList] = useState(groupIconsByFolder);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm) {
                const filteredItems = {}
                Object.keys(groupIconsByFolder).forEach(
                    (category) => {
                        groupIconsByFolder[category].forEach(
                            records => {
                                if (records.name.includes(searchTerm)) {
                                    if (category in filteredItems) {
                                        filteredItems[category].push(records);
                                    } else {
                                        filteredItems[category] = [records];
                                    }
                                }
                            }
                        )
                    }
                );
                setIconsList(filteredItems);
            } else {
                setIconsList(groupIconsByFolder);
            }
        }, 400)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


    const onIconClickHandler = (name, type) => {
        const iconDetails = groupIconsByFolder[type].filter((iconInfo) => name === iconInfo.name);
        setIconDetails(iconDetails[0]);
        setOpen(true);
    }

    const searchIconsByKeyString = (searchString: any) => {
        if (searchString) {
            setSearchTerm(searchString.target.value);
        }
    }

    return (
        <BasePageLayout bannerHeader='Iconography'>
            <div className='nexus-container'>
                <div className='nexus-row nexus-mt-4 nexus-end-xs'>
                    <div className='nexus-col-lg-4 nexus-col-md-3 nexus-col-xs-4'>
                        <NexusFormField>
                            <NexusInput
                                attrId='simple-input-filed'
                                placeholder='keyword'
                                autocomplete="off"
                                type='text'
                                onInput={(event) => searchIconsByKeyString(event)}
                                data-testid="input-text-box">
                                <NexusIcon src={IcEmail} size="md"></NexusIcon>
                            </NexusInput>
                        </NexusFormField>
                    </div>
                </div>
            </div>
            <NexusMenu
                position={'right'}
                open={open}
                onCloseEvent={() => setOpen(false)}>
                <NexusMenuItem>
                    <div className='view-icon-details'>
                        <h6 className='nexus-h6 framework'>Icon Details</h6>
                        <p className='nexus-body'>
                            name: <span className='nexus-body-sm'> {iconDetails.name.replace('ic_', '').replace('_24px.svg', '')}</span>
                        </p>
                        <p className='nexus-body'>path: </p>
                        <pre>
                            <code>
                                {iconDetails.filepath}
                            </code>
                        </pre>
                    </div>
                </NexusMenuItem>
            </NexusMenu>

            <div className="nexus-container nexus-body">
                <div className="nexus-row nexus-around-md">
                    <div className="nexus-col-xs-4">
                        {
                            Object.keys(iconsList).map((category, idx) => (
                                <div className='nexus-mt-4' key={idx}>
                                    <span className='nexus-h3 title'>{category}</span>
                                    <hr className='underline' />
                                    <div className='nexus-row'>
                                        {
                                            iconsList[category].map(
                                                (iconInfo, idy) => (
                                                    <div key={idy}
                                                        onClick={() => onIconClickHandler(iconInfo.name, category)}
                                                        className='nexus-col-lg-2 nexus-col-md-2 nexus-col-xs-1 nexus-ml-2 nexus-mr-2 nexus-mt-2 nexus-mb-2'>
                                                        <div className='icon-card-bg'>
                                                            <NexusIcon content={iconInfo.content} size={'lg'} className='icon-colors'></NexusIcon>
                                                        </div>
                                                        <span className='icon-details'>{iconInfo.name
                                                            .replace('ic_', '')
                                                            .replace('_24px.svg', '')
                                                            .replaceAll('_', ' ')
                                                        }</span>
                                                    </div>

                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </BasePageLayout>
    )
}

export default IconographyPage;