

document.getElementById("learnMoreBtn").addEventListener("click", function() {
    alert("You can find more about me on the About Me page!");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
