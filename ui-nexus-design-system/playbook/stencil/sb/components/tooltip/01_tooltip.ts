import html from '!!raw-loader!../../examples/tooltip/01_tooltip.html';

export default ({
    allowClick = false,
    attrId = 'default-tooltip',
    placement = 'right'
}) => {
    const div = document.createElement('section');
    div.className = `nexus-center-xs nexus-mt-4`;
    div.innerHTML = html
    .replace(`allowClick='false'`, `allowClick='${allowClick}'`)
    .replace(`attrId='false'`, `attrId='${attrId}'`)
    .replace(`placement='false'`, `placement='${placement}'`);

    return div;
}
