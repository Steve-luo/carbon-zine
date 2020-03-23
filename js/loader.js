const loader = document.getElementById("loader").style

window.addEventListener("load", function () {
  setTimeout(hideLoader(), 1000)
})

function hideLoader() {
  loader.top = "-100%"
}