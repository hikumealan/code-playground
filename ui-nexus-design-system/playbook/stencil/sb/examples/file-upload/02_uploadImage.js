
let queue2;
queue2 = [];

let uploaded2;
uploaded2 = [];

const addToQueueUniqueImage = (prevQueue, newFiles) => {
  const ids = new Set(prevQueue.map((prevFile) => prevFile.name));

  const merged = [...prevQueue, ...newFiles.filter((newFile) => !ids.has(newFile.name))];

  return merged;
};

const renderChipImage = (files) =>
  files
    .map(
      (file) => `
  <nexus-chip
      aria-label="Click to remove file - ${file.name}"
      removable
      id="${file.name}"
      success="${file.uploaded2 || false}"
    >
      ${file.name}
  </nexus-chip>`
    )
    .join('');

const renderQueue = (files, elementId) => {
  document.getElementById(elementId).innerHTML = `<nexus-chip-group id="imageGroup">${renderChipImage(
    files
  )}</nexus-chip-group>`;
  document.getElementById(elementId).addEventListener('click', removeFile);
};

// eslint-disable-next-line no-unused-vars
const removeFile = (event) => {
  const type = event.target.closest('section').id;

  if (type === 'queue2') {
    queue2 = queue2.filter((file) => file.name !== event.target.closest('nexus-chip').id);

    renderQueue(queue2, 'queue2');
  } else {
    uploaded2 = uploaded2.filter((file) => file.name !== event.target.closest('nexus-chip').id);

    renderQueue(uploaded2, 'uploaded2');
  }
};

// eslint-disable-next-line no-unused-vars
const handleChangeImage = (event) => {
  queue2 = addToQueueUniqueImage(queue2, [...event.target.files]);

  renderQueue(queue2, 'queue2');
};

let errorFile = '';

// eslint-disable-next-line no-unused-vars
const handleSubmitImage = (event) => {
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
      const nextQueue2 = queue2.map((file) => {
        file.uploaded2 = true;
        const format = file.name.split('.');
        if (format[1] === 'png') {
          return file;
        }
        const fileName = format[0];
        toast.setAttribute('show', new Boolean(true).toString());
        toast.innerHTML = `${fileName} ${text}`;
      });

      queue2 = [];
      uploaded2 = addToQueueUniqueImage(uploaded2, nextQueue2);

      renderQueue(queue2, 'queue2');
      renderQueue(uploaded2, 'uploaded2');
    });
};
document.getElementById('frmUploadImage').addEventListener('submit', (event) => { 
  handleSubmitImage(event);
})
document.getElementById('fileupldIdImage').addEventListener('change', (event) => {
  handleChangeImage(event);
})