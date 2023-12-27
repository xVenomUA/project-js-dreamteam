import { postSubscription } from "./APIFoodBoutique";

const form = document.querySelector('.footer-form');
const modal = document.querySelector('.modal-backdrop');
const modalSub = document.querySelector('.modal-subscribe-container');
const modalUnsub= document.querySelector('.modal-unsubscription-container');
const closeBtn = document.querySelectorAll('.modal-close-btn');
const someModal = document.querySelector('.modal-container')
const btnToTop = document.querySelector('.footer-btn-to-top');
const containerFooter = document.querySelector('.footer-container');
const loader = document.querySelector('.loader');

someModal.classList.add('is-hidden');
  
const onObserve = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            btnToTop.style.display = 'block';
        } else {
            btnToTop.style.display = 'none';
        }
    });
};

btnToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const observer = new IntersectionObserver(onObserve, {
    root: null,
    threshold: 0.5
});

observer.observe(containerFooter);


form.addEventListener('submit', onSubmit);
closeBtn.forEach(btn => {
    btn.addEventListener('click', closeModal);
});
async function onSubmit(evt) {
    evt.preventDefault();

    const email = document.querySelector('.footer-form-email').value;
    const data = { email };
    loader.classList.remove('is-hidden');

    try {
        const response = await postSubscription(data);
        loader.classList.add('is-hidden');
        modal.classList.remove('is-hidden');
        modalUnsub.classList.add('is-hidden');
        modalSub.classList.remove('is-hidden');
        console.log(response.data);
    } catch (error) {
        loader.classList.add('is-hidden');
        if (error.response && error.response.status === 409) {
            modal.classList.remove('is-hidden');
            modalUnsub.classList.remove('is-hidden');
            modalSub.classList.add('is-hidden');
        } else if(error.response && error.response.status === 400) {
            showError();
        }
    }

    evt.target.reset();
}

function closeModal(evt) {
    evt.preventDefault();
    modal.classList.add('is-hidden')
}

function showError() {
    const errorMessageDiv = document.querySelector('.error-message');
    errorMessageDiv.style.display = 'block';
    
    setTimeout(() => {
        errorMessageDiv.style.display = 'none';
    }, 2000); 
}