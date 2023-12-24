import axios from "axios";
const form = document.querySelector('.footer-form');
const modal = document.querySelector('.modal-backdrop');
const modalSub = document.querySelector('.modal-subscribe-container');
const modalUnsub= document.querySelector('.modal-unsubscription-container');
const closeBtn = document.querySelectorAll('.modal-close-btn');

form.addEventListener('submit', onSubmit);
closeBtn.forEach(btn => {
    btn.addEventListener('click', closeModal);
});
function onSubmit(evt) {
    evt.preventDefault();

    const email = document.querySelector('.footer-form-email').value;
    const data = {
        email: email
    };

    axios.post('https://food-boutique.b.goit.study/api/subscription', data)
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
}

function closeModal(evt) {
    evt.preventDefault();
    modal.classList.add('is-hidden')
}