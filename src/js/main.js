// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import simpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// get balance.json
// fetch('./js/balance.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });

const form = document.querySelector('.login-form');

function getInformation(name, password) {
  try {
    fetch('/src/js/balance.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        const d = data[name];
        // console.log(d);
        if (d) {
          if (d.password === password) {
            console.log('Login success');
            // window.location.href = 'balance.html';
            const balanceDiv = document.getElementById('balance');
            balanceDiv.innerHTML = 'Balance: ' + d.balance;
          } else {
            alert('Password is incorrect');
          }
        } else {
          alert('User not found');
        }
      });
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener('submit', loginHandler);

function loginHandler(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  getInformation(name, password);
}
