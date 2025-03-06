let storiesElement = document.querySelector(".stories");
let storiesLeftElement = document.querySelector(".story-left");
let storiesRightElement = document.querySelector(".story-right");

function updateArrowsVisibility() {
    storiesLeftElement.style.display =
        storiesElement.scrollLeft > 0 ? "flex" : "none";
    storiesRightElement.style.display =
        storiesElement.scrollLeft + storiesElement.clientWidth <
        storiesElement.scrollWidth
            ? "flex"
            : "none";
}

storiesLeftElement.addEventListener("click", () => {
    storiesElement.scrollTo({
        left: storiesElement.scrollLeft - 200,
        behavior: "smooth",
    });
});

storiesRightElement.addEventListener("click", () => {
    storiesElement.scrollTo({
        left: storiesElement.scrollLeft + 200,
        behavior: "smooth",
    });
});

storiesElement.addEventListener("scroll", updateArrowsVisibility);

updateArrowsVisibility();
