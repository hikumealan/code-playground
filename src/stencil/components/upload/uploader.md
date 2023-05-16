To create a StencilJS custom markup file upload input that suppresses the default look and provides a custom UI for the file load with validation, you can follow these steps:

1. Create a new StencilJS project using the `@stencil/cli` package.

2. Create a new web component using the `@Component()` decorator and define the component's properties, state, and methods. Here's an example:

```tsx
import { Component, h, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'custom-file-input',
  styleUrl: 'custom-file-input.css',
  shadow: true,
})
export class CustomFileInput {
  @Prop() accept: string = '';
  @Prop() maxSize: number = null;
  @Prop() invalidFileSizeMessage: string = '';
  @Prop() invalidFileTypeMessage: string = '';
  @State() selectedFile: File = null;
  @State() validationError: string = '';

  @Event() fileSelected: EventEmitter<File>;

  @Method()
  async validate(): Promise<boolean> {
    if (this.maxSize && this.selectedFile && this.selectedFile.size > this.maxSize) {
      this.validationError = this.invalidFileSizeMessage || `File size exceeds the maximum limit of ${this.maxSize} bytes`;
      return false;
    }
    if (this.accept && this.selectedFile && !this.selectedFile.type.match(new RegExp(this.accept))) {
      this.validationError = this.invalidFileTypeMessage || `Invalid file type. Only ${this.accept} files are allowed.`;
      return false;
    }
    this.validationError = '';
    return true;
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files[0];
    this.selectedFile = file;
    this.fileSelected.emit(file);
    this.validate();
  }

  render() {
    return (
      <div class="custom-file-input">
        <input type="file" onChange={(event: Event) => this.handleFileChange(event)} />
        <div class="custom-file-input-label">{this.selectedFile ? this.selectedFile.name : 'Select a file to upload'}</div>
        {this.validationError && <div class="custom-file-input-error">{this.validationError}</div>}
      </div>
    );
  }
}
```

In this example, the `custom-file-input` web component accepts three properties: `accept` for the accepted file types, `maxSize` for the maximum file size, `invalidFileSizeMessage` for the error message for the file size validation, and `invalidFileTypeMessage` for the error message for the file type validation. It also has a `selectedFile` state property that holds the selected file, a `validationError` state property that holds the validation error message, and an `fileSelected` event that is emitted when a file is selected. The `validate()` method is used to perform file validation based on the properties and set the validation error message. The `handleFileChange()` method is used to handle the file input change event and emit the `fileSelected` event and call the `validate()` method. The `render()` method displays the selected file name or a placeholder message and renders the file input and validation error message.

3. Add some styles to the web component's CSS file (`custom-file-input.css`) to create the custom UI and hide the default file input. Here's an example:

```css
.custom-file-input {
  position: relative;
}

.custom-file-input input[type='file'] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity
