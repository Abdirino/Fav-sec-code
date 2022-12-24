// nav sec
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}
// end nav sec

// game cards
let activeIndex = 0;
const group = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  // bump active index
  const nextIndex = activeIndex + 1 <= group.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  // active group becomes after
  currentGroup.dataset.status = "after";
  // next group becomes active
  nextGroup.dataset.status = "becoming-active-from-before";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleHateClick = () => {
  // bump active index
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : group.length - 1;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  // active group becomes after
  currentGroup.dataset.status = "before";
  // next group becomes active
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
// end game cards

// carmel img hover animation
const track = document.getElementById("img-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage=track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;       

    Math.min(nextPercentage, 0);
    Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    for(const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${nextPercentage + 100} 50%`;
    }
}
// end carmel img hover animation
