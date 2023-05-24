import html from '!!raw-loader!../../examples/dropdown/01_dropdown.html';

export default ({ type = 'basic', placement = 'left', height = '150', width = '180', show = false }) => {
  const dropdown = document.createElement('div');
  dropdown.innerHTML = html
  .replace(`dropdown-type="basic"`, `dropdown-type="${type}"`)
  .replace(`placement="right"`, `placement="${placement}"`)
  .replace(`height="150"`, `height="${height}"`)
  .replace(`width="180"`, `width="${width}"`)
  .replace(`show=false`, `show=${show}`);
  return dropdown;
};