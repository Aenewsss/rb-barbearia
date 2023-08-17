const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    navbar.style.backgroundColor =
        window.scrollY === 0 ? "transparent" : "black" 
})