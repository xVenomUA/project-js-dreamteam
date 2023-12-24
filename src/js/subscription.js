import { postSubscription } from "./APIFoodBoutique";

const form = document.querySelector('.footer-form');
const modal = document.querySelector('.modal-backdrop');
const modalSub = document.querySelector('.modal-subscribe-container');
const modalUnsub= document.querySelector('.modal-unsubscription-container');
const closeBtn = document.querySelectorAll('.modal-close-btn');
const someModal = document.querySelector('.modal-container')
const btnToTop = document.querySelector('.footer-btn-to-top');
const containerFooter = document.querySelector('.footer-container');

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
function onSubmit(evt) {
    evt.preventDefault();

    const email = document.querySelector('.footer-form-email').value;
    const data = {
        email
    };

    postSubscription(data)
        .then(response => {
            modal.classList.remove('is-hidden');
            modalUnsub.classList.add('is-hidden');
            modalSub.classList.remove('is-hidden')
            console.log(response.data);
            return response.json()
        })
        .catch((error) => {
            if (error.response && error.response.status === 409) {
                modal.classList.remove('is-hidden');
                modalUnsub.classList.remove('is-hidden');
                modalSub.classList.add('is-hidden')
            } else {
                console.log(error);
            }
            return error.message
        })
    evt.target.reset(); 
}

function closeModal(evt) {
    evt.preventDefault();
    modal.classList.add('is-hidden')
}