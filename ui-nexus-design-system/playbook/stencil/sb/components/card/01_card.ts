import html from '!!raw-loader!../../examples/card/01_card.html';

export default ({
    bgColor = "",
    bgImage = "",
    clickable = false,
    height = ""
}) => {
    const div = document.createElement('div');
    div.className = 'nexus-row nexus-center-xs nexus-mt-2';
    div.innerHTML = html
    .replace('bg-color=""', `bg-color='${bgColor}'`)
    .replace('bg-image=""', `bg-image=""='${bgImage}'`)
    .replace('clickable=false', `clickable='${clickable}'`)
    .replace('height=""', `height='${height}'`);

    return div;
}