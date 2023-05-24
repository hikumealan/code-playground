import html from '!!raw-loader!../../examples/toast/01_toast.html';


export default ({
    autoClose = '',
    closeable = false,
    iconSrc = '',
    position = '',
    show = true,
    variant = 'info'
}) => {
    const section = document.createElement('section');
    section.innerHTML = html
    .replace(`autoClose=''`, `autoClose='${autoClose}'`)
    .replace(`closeable=false`, `closeable='${closeable}'`)
    .replace(`iconSrc=''`, `iconSrc='${iconSrc}'`)
    .replace(`position=''`,`position='${position}'`)
    .replace(`show=true`, `show=${show}`)
    .replace(`variant='info'`,`variant='${variant}'`);
    
    return section;
};
