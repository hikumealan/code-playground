import { useState } from 'react';
import PropTypes from 'prop-types';
import { NexusFileUpload, NexusFormField, NexusChipGroup, NexusChip } from '@nexus/react';


const FileUploadComponent: React.FC = (props) => {
  const {
    attrId = 'nexus-file-upload',
    disabled = false,
    multiple = false,
    required = false,
    accept = '*'
  } = { ...props };
  const [queue, setQueue] = useState<any>([]);
  const [uploaded, setUploaded] = useState<{ name: string; uploaded: boolean }[]>([]);

  const addToQueueUnique = (
    prevQueue: { name: string; uploaded: boolean }[],
    newFiles: { name: string; uploaded: boolean }[]
  ) => {
    const ids = new Set(prevQueue.map((prevFile: { name: string }) => prevFile.name));

    return [...prevQueue, ...newFiles.filter((newFile: { name: string }) => !ids.has(newFile.name))];
  };

  const handleChange = (event: any) => {
    setQueue(addToQueueUnique(queue, [...event.target.files]));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const uploadURL = 'https://httpstat.us/200';
    const formData = new FormData();
    formData.append('files', queue);

    // Fake API request that returns a 200
    // Replace this with your API method
    fetch(uploadURL, {
      method: 'POST',
      body: formData
    })
      .then((response) => response)
      .then(() => {
        const nextQueue = queue.map((file: { name: string; uploaded: boolean }) => {
          file.uploaded = true;

          return file;
        });

        setQueue([]);
        setUploaded(addToQueueUnique(uploaded, nextQueue));
      });
  };

  const removeFile = (removedFile: { name: string }) => {
    setQueue(queue.filter((file: { name: string }) => file.name !== removedFile.name));
  };

  const removeUploadedFile = (removedFile: { name: string }) => {
    setUploaded(uploaded.filter((file: { name: string }) => file.name !== removedFile.name));
  };

  const renderQueue = (queue1: any, cb: any) =>
    queue1.map((file: { name: string; uploaded: boolean }) => (
      <NexusChip
        data-testid="doc-uploaded-chip"
        aria-label={`Click to remove file - ${file.name}`}
        removable={true}
        key={file.name}
        success={file.uploaded}
        onClick={() => cb(file)}
      >
        {file.name}
      </NexusChip>
    ));

  const fileDrop = (event: any) => {
    event.preventDefault();
    setQueue(addToQueueUnique(queue, [...event.dataTransfer.files]));
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
            <p>Drop File here or click to upload</p>
            <p>Max file size is 25MB</p>
          </NexusFileUpload>
        </NexusFormField>

        {queue.length > 0 && (
          <NexusChipGroup className="nexus-rhythm-4">
            {/* span required for react to render dynamic content into the correct slot */}
            <span>{renderQueue(queue, removeFile)}</span>
          </NexusChipGroup>
        )}

        {uploaded.length > 0 && (
          <NexusChipGroup className="nexus-rhythm-4">
            {/* span required for react to render dynamic content into the correct slot */}
            <span>{renderQueue(uploaded, removeUploadedFile)}</span>
          </NexusChipGroup>
        )}

        <button type="submit" className="nexus-btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
};

FileUploadComponent.propTypes = {
  attrId: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default FileUploadComponent;
