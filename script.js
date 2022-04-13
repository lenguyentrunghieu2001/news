const clform = document.querySelector(".form");
const btnbutton = clform.querySelector(".form button");
const Input = clform.querySelector(".form input");
const clfooter = document.querySelector(".footer-sub");
const btnsub = clfooter.querySelector(".footer-sub button");

btnbutton.addEventListener("click", () => {
  clform.classList.toggle("active");
});

btnsub.addEventListener("click", () => {
  btnsub.classList.toggle("active1");
  if (btnsub.classList.contains("active1")) {
    btnsub.innerHTML = `Subscribed <i class="fas fa-bell-slash"></i>`;
  } else {
    btnsub.innerHTML = `Subscribe <i class="fas fa-bell"></i>`;
  }
});
