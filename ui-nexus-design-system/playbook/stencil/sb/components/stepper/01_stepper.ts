import html from '!!raw-loader!../../examples/stepper/01_stepper.html';

export default ({
    steppertype = 'row'
}) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'nexus-center-xs nexus-pt-3 nexus-pl-6')
    div.innerHTML = html
    .replace('steppertype=\'row\'', `steppertype=${steppertype}`);
    return div;
}
