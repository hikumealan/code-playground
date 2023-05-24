import html from '!!raw-loader!../../examples/stepper/02_status.html';

export default() => {
    const stepperExamples = document.createElement('div');
    stepperExamples.setAttribute('class', 'nexus-center-xs nexus-pt-3 nexus-pl-6');
    stepperExamples.innerHTML = html;
    return stepperExamples;
}