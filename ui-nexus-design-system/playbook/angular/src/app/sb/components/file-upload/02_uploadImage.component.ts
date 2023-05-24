import { Component, Input } from '@angular/core';
import { uploadImage } from '../../constants';

@Component({
  selector: 'app-upload-image',
  templateUrl: './02_uploadImage.component.html'
})
export default class UploadImageComponent {
  @Input() accept: String = '';

  @Input() attrId: String = '';

  @Input() disabled: boolean = true;

  @Input() multiple: boolean = false;

  @Input() required: boolean = false;

  public queue: any = [];

  public uploaded: any = [];

  uploadImage = uploadImage;

  incorrectFile = false;

  errorFile = '';

  public handleChange = (event) => {
    this.queue = this.addToQueueUnique(this.queue, [...event.target.files]);
  };

  public handleSubmit = (event) => {
    event.preventDefault();
    const uploadURL = 'https://httpstat.us/200';
    const formData = new FormData();
    formData.append('files', this.queue);

    // Fake API request that returns a 200
    // Replace this with your API method
    fetch(uploadURL, {
      method: 'POST',
      body: formData
    })
      .then((response) => response)
      .then(() => {
        // eslint-disable-next-line array-callback-return
        const nextQueue = this.queue.map((file) => {
          file.uploaded = true;
          const format = file.name.split('.');
          if (format[1] === 'png') {
            return file;
          }
          // eslint-disable-next-line prefer-destructuring
          this.errorFile = format[0];
          this.incorrectFile = true;
        });

        this.queue = [];
        this.uploaded = this.addToQueueUnique(this.uploaded, nextQueue);
      });
  };

  public removeFile = (removedFile) => {
    this.queue = this.queue.filter((file) => file.name !== removedFile.name);
  };

  public removeUploadedFile = (removedFile) => {
    this.uploaded = this.uploaded.filter((file) => file.name !== removedFile.name);
  };

  private readonly addToQueueUnique = (prevQueue, newFiles) => {
    const ids = new Set(prevQueue.map((prevFile) => prevFile.name));

    return [...prevQueue, ...newFiles.filter((newFile) => !ids.has(newFile.name))];
  };
}
