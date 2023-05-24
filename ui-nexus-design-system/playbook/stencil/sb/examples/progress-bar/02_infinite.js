const progressBarButton =document.getElementById('progressBarBtn');
const progressBarEta =document.getElementById('progressBar');
progressBarButton.addEventListener('click', () => {
    if (progressBarEta.hasAttribute('indeterminate')){
        progressBarEta.removeAttribute('indeterminate');
        progressBarButton.innerHTML = 'Check ETA';
    } 
    else {
        progressBarEta.setAttribute('indeterminate', new Boolean(true).toString());
        progressBarButton.innerHTML = 'Calculating ETA';
    }
});