import html from '!!raw-loader!../../examples/pin-entry/01_pin-entry.html';
export default ({ disabled = false, length = 3, type = 'text' }) => {
  const defaultPin = document.createElement('div');
  defaultPin.className = `nexus-center-xs nexus-mt-5`;
  const pinEntry = document.createElement('nexus-pin-entry');
  defaultPin.innerHTML = html

    .replace(`disabled="false"`, `disabled=${disabled}`)
    .replace(`length="3"`, `length=${length}`)
    .replace(`type="text"`, `type=${type}`);

  return defaultPin;
};
