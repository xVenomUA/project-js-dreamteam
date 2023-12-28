import { postSubscription } from "./APIFoodBoutique";

const form = document.querySelector('.footer-form');
const modal = document.querySelector('.modal-backdrop');
const modalSub = document.querySelector('.modal-subscribe-container');
const modalUnsub = document.querySelector('.modal-unsubscription-container');
const closeBtns = document.querySelectorAll('.modal-close-btn');
const loader = document.querySelector('.loader');
const btnToTop = document.querySelector('.footer-btn-to-top');
const containerFooter = document.querySelector('.footer-container');
const someModal = document.querySelector('.modal-container')

someModal.classList.add('is-hidden');


function toggleModal(isVisible, isSubscribed = true) {
    modal.classList.toggle('is-hidden', !isVisible);
    modalSub.classList.toggle('is-hidden', !isSubscribed);
    modalUnsub.classList.toggle('is-hidden', isSubscribed);
    document.body.style.overflow = "hidden";

}

function showError() {
    const errorMessageDiv = document.querySelector('.error-message');
    errorMessageDiv.style.display = 'block';
    setTimeout(() => errorMessageDiv.style.display = 'none', 2000);
}


async function onSubmit(evt) {
    evt.preventDefault();
    const email = form.querySelector('.footer-form-email').value;
    loader.classList.remove('is-hidden');
    function handleClickOutsideModal(event) {
        if (event.target === modal) {
            toggleModal(false);
        }
        document.body.style.overflow = "scroll";
    }
    modal.addEventListener('click', handleClickOutsideModal);


    try {
        const response = await postSubscription({ email });
        console.log(response.data);
        toggleModal(true);
    } catch (error) {
        if (error.response) {
            error.response.status === 409 ? toggleModal(true, false) : showError();
        }
    } finally {
        loader.classList.add('is-hidden');
        form.reset();
    }


}


function setupScrollToTopButton() {
    const onObserve = (entries) => {
        entries.forEach(entry => {
            btnToTop.style.display = entry.isIntersecting ? 'block' : 'none';
        });
    };

    const observer = new IntersectionObserver(onObserve, { root: null, threshold: 0.5 });
    observer.observe(containerFooter);

    btnToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener("DOMContentLoaded", () => {
    const pathname = window.location.pathname;
    if (pathname.endsWith("index.html") || pathname === "/") {
        setupScrollToTopButton();
    }
});

form.addEventListener('submit', onSubmit);
closeBtns.forEach(btn => btn.addEventListener('click', () => toggleModal(false)));
