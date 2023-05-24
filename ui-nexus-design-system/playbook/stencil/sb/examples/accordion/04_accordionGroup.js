const done = document.getElementById('done-icon');
const settings = document.getElementById('settings-icon');
const copy = document.getElementById('copy-icon');
const remove = document.getElementById('delete-icon');

done.addEventListener('toggleEvent', () => {
    const open = done.getAttribute('open') === 'true';
    done.setAttribute('open', new Boolean(!open).toString());
});

settings.addEventListener('toggleEvent', () => {
    const open = settings.getAttribute('open') === 'true';
    settings.setAttribute('open', new Boolean(!open).toString());
});

copy.addEventListener('toggleEvent', () => {
    const open = copy.getAttribute('open') === 'true';
    copy.setAttribute('open', new Boolean(!open).toString());
});

remove.addEventListener('toggleEvent', () => {
    const open = remove.getAttribute('open') === 'true';
    remove.setAttribute('open', new Boolean(!open).toString());
});