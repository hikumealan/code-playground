let queue;
queue = [];

let uploaded;
uploaded = [];

const addToQueueUnique = (prevQueue, newFiles) => {
  const ids = new Set(prevQueue.map((prevFile) => prevFile.name));

  const merged = [...prevQueue, ...newFiles.filter((newFile) => !ids.has(newFile.name))];

  return merged;
};

const renderChip = (files) =>
  files
    .map(
      (file) => `
    <nexus-chip
        aria-label="Click to remove file - ${file.name}"
        removable
        id="${file.name}"
        success="${file.uploaded || false}"
      >
        ${file.name}
    </nexus-chip>`
    )
    .join('');

const renderQueue = (files, elementId) => {
  document.getElementById(elementId).innerHTML = `<nexus-chip-group>${renderChip(files)}</nexus-chip-group>`;
  document.getElementById(elementId)?.addEventListener('click', removeFile);
};

// eslint-disable-next-line no-unused-vars
const removeFile = (event) => {
  const type = event.target.closest('section').id;

  if (type === 'queue') {
    queue = queue.filter((file) => file.name !== event.target.closest('nexus-chip').id);

    renderQueue(queue, 'queue');
  } else {
    uploaded = uploaded.filter((file) => file.name !== event.target.closest('nexus-chip').id);

    renderQueue(uploaded, 'uploaded');
  }
};

// eslint-disable-next-line no-unused-vars
const handleChange = (event) => {
  queue = addToQueueUnique(queue, [...event.target.files]);

  renderQueue(queue, 'queue');
};

// eslint-disable-next-line no-unused-vars
const handleSubmit = (event) => {
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
      const nextQueue = queue.map((file) => {
        file.uploaded = true;

        return file;
      });

      queue = [];
      uploaded = addToQueueUnique(uploaded, nextQueue);

      renderQueue(queue, 'queue');
      renderQueue(uploaded, 'uploaded');
    });
};

document.getElementById('frmUpload').addEventListener('submit', (event) => {
  handleSubmit(event);
});
document.getElementById('fileupldId').addEventListener('change', (event) => {
  handleChange(event);
});
