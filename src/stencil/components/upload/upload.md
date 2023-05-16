Here is the updated code with the improvements I mentioned:

```tsx
import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'custom-file-input',
  styleUrl: 'custom-file-input.css',
  shadow: true,
})
export class CustomFileInput {
  @Prop() disabled: boolean = false;
  @Prop() acceptedTypes: string = 'image/*,.pdf';
  @Prop() maxFiles: number = Infinity;

  @State() files: FileList;
  @State() fileNames: string[] = [];
  @State() errorMessage: string = '';

  handleFileInputChange = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    this.files = inputElement.files;
    this.fileNames = Array.from(this.files).map((file) => file.name);

    if (this.files.length > this.maxFiles) {
      this.errorMessage = `You can only upload up to ${this.maxFiles} files`;
    } else {
      this.errorMessage = '';
    }
  };

  handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  handleDrop = (event: DragEvent) => {
    event.preventDefault();
    this.files = event.dataTransfer.files;
    this.fileNames = Array.from(this.files).map((file) => file.name);

    if (this.files.length > this.maxFiles) {
      this.errorMessage = `You can only upload up to ${this.maxFiles} files`;
    } else {
      this.errorMessage = '';
    }
  };

  render() {
    return (
      <div
        class="custom-file-input-container"
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        <label class="custom-file-input-label">
          <input
            type="file"
            multiple
            onChange={this.handleFileInputChange}
            accept={this.acceptedTypes}
            disabled={this.disabled}
          />
          <span class="custom-file-input-label-text">
            <slot name="label-text">Choose files</slot>
          </span>
          {this.fileNames.length > 0 && (
            <span class="custom-file-input-selected-files">
              {this.fileNames.join(', ')}
            </span>
          )}
        </label>
        {this.errorMessage && (
          <div class="custom-file-input-error">{this.errorMessage}</div>
        )}
      </div>
    );
  }
}
```

In addition to the improvements I mentioned earlier, I also updated the `handleFileInputChange` method to use the `HTMLInputElement` type instead of the generic `Event` type for better type checking.
