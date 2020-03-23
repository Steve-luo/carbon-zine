Viewer.setDefaults({
  backdrop: true,
  button: true,
  fullscreen: true,
  loading: true,
  loop: false,
  keyboard: false,
  movable: true,
  navbar: false,
  rotatable: false,
  scalable: false,
  slideOnTouch: false,
  title: false,
  toggleOnDblclick: false,
  toolbar: false,
  tooltip: false,
  transition: true,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  viewed() {
    viewerNames[0].zoomTo(0.4);
    viewerNames[1].zoomTo(1);
  },
})

let imgTags = document.getElementsByTagName("img")
let viewerNames = []

for (let i = 0; i < imgTags.length; i++) {
  viewerNames[i] = new Viewer(document.getElementById(imgTags[i].id))
}