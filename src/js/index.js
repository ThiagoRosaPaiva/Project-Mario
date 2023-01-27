const trailerButton = document.querySelector(".trailer-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const video = document.getElementById("video");
const videoSource = video.src;

function addRemoveOpen () {
    modal.classList.toggle("open");
}

trailerButton.addEventListener ("click", () => {
    addRemoveOpen();
    video.setAttribute("src", videoSource);
});

close.addEventListener ("click", () => {
    addRemoveOpen();
    video.setAttribute("src", "");
})
