const nav = document.querySelector("nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};
navHeight = nav.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navHeight + "px"
);
