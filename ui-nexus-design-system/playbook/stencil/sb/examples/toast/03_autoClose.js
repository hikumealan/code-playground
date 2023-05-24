const section = document.getElementById('auto-close-section');
let toast = document.getElementById('nexus-toast-auto-close');
let timeleft = 20;

const downloadTimer = setInterval(() => {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        section.removeChild(toast);

        const resetButton = document.createElement('button');
        resetButton.className = 'class="nexus-center-xs nexus-pt-6" nexus-btn nexus-btn-primary nexus-mt-2';
        resetButton.addEventListener('click', () => {
            location.reload();
        })
        resetButton.textContent = 'Reload the page';
        section.appendChild(resetButton);
    } else {
        toast.setAttribute('variant', 'info');
        toast.innerHTML = `The toast will close in ${timeleft}s`
    }
    timeleft -= 1;
}, 1000);