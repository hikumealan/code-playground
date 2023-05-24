import { useState } from 'react';
import PropTypes from 'prop-types';
import { NexusFileUpload, NexusFormField, NexusChipGroup, NexusChip, NexusToast } from '@nexus/react';
import { uploadImage } from '../../constants';



const UploadImageComponent: React.FC = (props) => {
    const {
        attrId = 'nexus-file-upload',
        disabled = false,
        multiple = false,
        required = false,
        accept = '*'
    } = { ...props };
    const [queue2, setQueue2] = useState<any>([]);
    const [toast, setToast] = useState<boolean>(false);
    const [uploaded2, setUploaded2] = useState<{ name: string; uploaded2: boolean }[]>([]);

    const addToQueueUnique = (
        prevQueue: { name: string; uploaded2: boolean }[],
        newFiles: { name: string; uploaded2: boolean }[]
    ) => {
        const ids = new Set(prevQueue.map((prevFile: { name: string }) => prevFile.name));

        return [...prevQueue, ...newFiles.filter((newFile: { name: string }) => !ids.has(newFile.name))];
    };

    const handleChange = (event: any) => {
        setQueue2(addToQueueUnique(queue2, [...event.target.files]));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const uploadURL = 'https://httpstat.us/200';
        const formData = new FormData();
        formData.append('files', queue2);

        // Fake API request that returns a 200
        // Replace this with your API method
        fetch(uploadURL, {
            method: 'POST',
            body: formData
        })
            .then((response) => response)
            .then(() => {
                const nextQueue = queue2.map((file: { name: string; uploaded2: boolean }) => {
                    file.uploaded2 = true;
                    const format = file.name.split('.');
                    if (format[1] === 'png') {
                        return file;
                    } else {
                        setToast(true);
                    }
                    const fileName = format[0];
                });

                setQueue2([]);
                setUploaded2(addToQueueUnique(uploaded2, nextQueue));
            });
    };

    const removeFile = (removedFile: { name: string }) => {
        setQueue2(queue2.filter((file: { name: string }) => file.name !== removedFile.name));
    };

    const removeUploadedFile = (removedFile: { name: string }) => {
        setUploaded2(uploaded2.filter((file: { name: string }) => file.name !== removedFile.name));
    };

    const renderQueue = (queue21: any, cb: any) =>
        queue21.map((file: { name: string; uploaded2: boolean }) => (
            <NexusChip
                data-testid="doc-uploaded2-chip"
                aria-label={`Click to remove file - ${file.name}`}
                removable={true}
                key={file.name}
                success={file.uploaded2}
                onClick={() => cb(file)}
            >
                {file.name}
            </NexusChip>
        ));

    const fileDrop = (event: any) => {
        event.preventDefault();
        setQueue2(addToQueueUnique(queue2, [...event.dataTransfer.files]));
    };

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <NexusFormField>
                    <NexusFileUpload
                        attrId={attrId}
                        disabled={disabled}
                        multiple={multiple}
                        required={required}
                        accept={accept}
                        onInput={(event: any) => handleChange(event)}
                        onDrop={(event: any) => fileDrop(event)}
                    >
                        <div dangerouslySetInnerHTML={{ __html: uploadImage.content }}></div>
                    </NexusFileUpload>
                </NexusFormField>

                {queue2.length > 0 && (
                    <NexusChipGroup className="nexus-rhythm-4">
                        {/* span required for react to render dynamic content into the correct slot */}
                        <span>{renderQueue(queue2, removeFile)}</span>
                    </NexusChipGroup>
                )}

                {uploaded2.length > 0 && (
                    <NexusChipGroup className="nexus-rhythm-4">
                        {/* span required for react to render dynamic content into the correct slot */}
                        <span>{renderQueue(uploaded2, removeUploadedFile)}</span>
                    </NexusChipGroup>
                )}

                <button type="submit" className="nexus-btn-primary">
                    Upload
                </button>
                <NexusToast position="bottom" closeable={true} variant="error" show={toast} style={toast ? { zIndex: "10" } : { display: "none" }}>Name {uploadImage.text}</NexusToast>
            </form>
        </div>
    );
};

UploadImageComponent.propTypes = {
    attrId: PropTypes.string,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    required: PropTypes.bool
};

export default UploadImageComponent;
