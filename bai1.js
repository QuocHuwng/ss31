let title = document.getElementsByTagName("p")
function handleHideText(){
    title[0].classList.add("hide_title");
}
function handleShowText() {
    title[0].classList.remove("hide_title")
}