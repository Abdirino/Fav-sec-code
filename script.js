// nav sec
const navToggler = document.querySelector(".toggle");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px"
    }else{
        nav.removeAttribute("style");
    }
}
// end nav sec