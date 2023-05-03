import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'rich-text-editor',
  shadow: true,
})
export class RichTextEditor {
  @Prop() value: string;
  @Prop() onChange: (value: string) => void;
  @Prop() onFocus: () => void;
  @Prop() onBlur: () => void;

  constructor() {
    super();
  }

  onInput(event) {
    const value = event.target.value;
    this.onChange(value);
  }

  render() {
    const { value, onChange, onFocus, onBlur } = this;

    return (
      <div class="rich-text-editor">
        <div class="editor">
          <textarea
            ref="editor"
            value={value}
            onChange={this.onInput}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div class="toolbar">
          <button
            type="button"
            className="bold"
            onClick={() => this.editor.focus(); this.editor.execCommand('bold')}
          >
            Bold
          </button>
          <button
            type="button"
            className="italic"
            onClick={() => this.editor.focus(); this.editor.execCommand('italic')}
          >
            Italic
          </button>
          <button
            type="button"
            className="underline"
            onClick={() => this.editor.focus(); this.editor.execCommand('underline')}
          >
            Underline
          </button>
          <button
            type="button"
            className="strikethrough"
            onClick={() => this.editor.focus(); this.editor.execCommand('strikethrough')}
          >
            Strikethrough
          </button>
          <button
            type="button"
            className="bullet-list"
            onClick={() => this.editor.focus(); this.editor.execCommand('insertunorderedlist')}
          >
            Bullet List
          </button>
          <button
            type="button"
            className="numbered-list"
            onClick={() => this.editor.focus(); this.editor.execCommand('insertorderedlist')}
          >
            Numbered List
          </button>
          <button
            type="button"
            className="link"
            onClick={() => this.editor.focus(); this.editor.execCommand('createlink')}
          >
            Link
          </button>
          <button
            type="button"
            className="image"
            onClick={() => this.editor.focus(); this.editor.execCommand('insertimage')}
          >
            Image
          </button>
          <button
            type="button"
            className="code-block"
            onClick={() => this.editor.focus(); this.editor.execCommand('insertparagraph')}
          >
            Code Block
          </button>
          <button
            type="button"
            className="paragraph"
            onClick={() => this.editor.focus(); this.editor.execCommand('insertparagraph')}
          >
            Paragraph
          </button>
          <button
            type="button"
            className="undo"
            onClick={() => this.editor.focus(); this.editor.execCommand('undo')}
          >
            Undo
          </button>
          <button
            type="button"
            className="redo"
            onClick={() => this.editor.focus(); this.editor.execCommand('redo')}
          >
            Redo
          </button>
          <button
            type="button"
            className="clear"
            onClick={() => this.editor.focus(); this.editor.execCommand('clear')}
          >
            Clear All
          </button>
        </div>
      </div>
    );
  }
}
