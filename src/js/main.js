import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// get balance.json
// fetch('./js/balance.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

import balance from './balance.json';

const form = document.querySelector('.login-form');

function getInformation(name, password) {
  try {
    const balanceDiv = document.getElementById('balance');
    balanceDiv.innerHTML = '';
    for (const user of balance) {
      if (user.username === name && user.password === password) {
        balanceDiv.innerHTML = 'Balance: ' + user.userdata.balance;
      }
    }
    if (balanceDiv.innerHTML === '') {
      iziToast.warning({
        message: `Incorrect name or password`,
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error(error);
  }
}

// form.addEventListener('submit', loginHandler);

// function loginHandler(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const password = document.getElementById('password').value;
//   getInformation(name, password);
// }

const mobileBtn = document.querySelector('.header-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-close-button');

mobileBtn.addEventListener('click', mobileHandler);

function mobileHandler(e) {
  mobileMenu.classList.remove('visually-hidden');
}

closeBtn.addEventListener('click', closeHandler);

function closeHandler(e) {
  mobileMenu.classList.add('visually-hidden');
}
// try {
//     fetch('./js/balance.json')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         const d = data[name];
//         console.log(d);
//         if (d) {
//           if (d.password === password) {
//             console.log('Login success');
//             // window.location.href = 'balance.html';
//             const balanceDiv = document.getElementById('balance');
//             balanceDiv.innerHTML = 'Balance: ' + d.balance;
//           } else {
//             alert('Password is incorrect');
//           }
//         } else {
//           alert('User not found');
//         }
//       });
//   }
