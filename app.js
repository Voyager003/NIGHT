const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    console.log("title was clieked!")
}

title.addEventListener("click", handleTitleClick);

