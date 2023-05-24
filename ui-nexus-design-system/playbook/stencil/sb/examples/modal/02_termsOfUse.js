const termsOfUseModal = document.getElementById('terms-of-use-modal');
const acceptTermsOfUseModal = document.getElementById('accept-terms-and-conditions');
const termsOfUseStatus = document.getElementById('terms-of-use-status');
const confirm = document.getElementById('confirm-terms-f-use-modal');
const cancel = document.getElementById('cancel-terms-f-use-modal');
const acceptTermsOfUse = document.getElementById('accept-terms-of-use');

termsOfUseModal.addEventListener('closeEvent', () => termsOfUseCloseModal());

const termsOfUseCloseModal = () => termsOfUseModal.setAttribute("show", new Boolean(false).toString());

const termsOfUseShowModal = () => termsOfUseModal.setAttribute("show", new Boolean(true).toString());

const checkboxHandler = () => {
    if (acceptTermsOfUseModal.getElementsByClassName('nexus-checkbox-checked').length > 0) {
        acceptTermsOfUseModal.removeAttribute('checked');
        termsOfUseStatus.innerHTML = `<nexus-notification variant='error'>Not accepted terms and conditions.</nexus-notification>`
    } else {
        termsOfUseStatus.innerHTML = `<nexus-notification variant='success'>Accepted Terms and Conditions.</nexus-notification>`
    };
}


confirm.addEventListener('click', () => termsOfUseCloseModal());
cancel.addEventListener('click', () => termsOfUseCloseModal());
acceptTermsOfUse.addEventListener('click', () => termsOfUseShowModal());
termsOfUseModal.addEventListener('input', () => checkboxHandler());