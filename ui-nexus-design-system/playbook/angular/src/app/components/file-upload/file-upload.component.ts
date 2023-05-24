import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() attrId: String = '';

  @Input() disabled: boolean = false;

  @Input() multiple: boolean = false;

  @Input() required: boolean = false;

  public queue: any = [];

  public uploaded: any = [];

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
        const nextQueue = this.queue.map((file) => {
          file.uploaded = true;

          return file;
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
