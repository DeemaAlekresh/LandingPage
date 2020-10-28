
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (p) {
        p.preventDefault();
        const listOfSections = document.querySelectorAll('a[href^="#"]');
        listOfSections.forEach(function (section) {
            section.addEventListener("click", () => {
                listOfSections.forEach((section) => {
                    if (section.classList.contains("highlighted")) {
                        section.classList.remove("highlighted");
                    }
                });
                section.classList.add("highlighted");
            });
        });
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
}
