//get the modal
const modal = document.querySelector(".modal");
//get the close <span> of modal
const closeBtn = document.querySelector('.close');

//get the modal content
const modalContent = document.querySelector('.modal-content');

let output = document.createElement('p');

//fetch the api
const getAdvice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        output.innerHTML = data.slip.advice;
        modal.style.display = "block";
        modalContent.appendChild(output)
        cookie.src = "img/cookieopen.png";
        cookie.classList.add('open');
    } catch (err) {
        alert(err)
    }
}

//add a click event to the cookie
const cookie = document.querySelector('.cookie');
cookie.addEventListener('click', () => {
    getAdvice();
})

//reset button (refresh page)
const button = document.getElementById('reset');
button.addEventListener('click', () => {
    window.location.reload(true);
})

//close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
})

