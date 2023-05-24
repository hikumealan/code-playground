import React from 'react';

const NoteComponent = (props: { noteType: any }) => {
  const showChangeNote = props.noteType;

  return (
    <>
      {showChangeNote === 'eventNote' && (
        <div>
          <pre>&nbsp;</pre>
          <p className="nexus-subtitle">Note:</p>
          <p className="nexus-body-sm">
            React implements its own synthetic event system, it cannot listen for DOM events coming from Custom Elements
            without the use of a workaround.
          </p>
          <p className="nexus-body-sm">
            <a href="https://github.com/ionic-team/stencil-ds-output-targets">@stencil/react-output-target</a> has
            solved most of these issues by creating a wrapper with most necessary bindings. The only caveat to this is
            the react <b>onChange</b> synthetic event.
          </p>
          <p className="nexus-body-sm">
            React actually attaches listeners for <b>onChange</b> to what the DOM event <b>onInput</b> would natively
            do. As such we cannot use the <b>onChange</b> synthetic event with web components. Instead you should use{' '}
            <b>onInput</b> while writing your react components in Typescript.
          </p>
        </div>
      )}

      {showChangeNote === 'onNote' && (
        <div>
          <pre>&nbsp;</pre>
          <p className="nexus-subtitle">React Convention of Event Names</p>
          <p className="nexus-body-sm">
            Generally Event Names in React follows <b>onEventName</b> convention.{' '}
          </p>
          <p className="nexus-body-sm">
            Hence to Make sure the React convention is followed, Stencil generates React component wrappers and make
            sure JSX bindings for custom events follows similar React convention(event names are renamed to match
            React's convention of <b>onEventName</b>)
          </p>
        </div>
      )}
    </>
  );
};

export default NoteComponent;
