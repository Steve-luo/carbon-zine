const pageColor = ["#20BF55", "#20BF55", "#0B4F6C", "#01BAEF"]
const accentColor = ["#041d28", "#041d28", "#fbfbff", "#2b2b2b"]

const root = document.documentElement;
const container = document.querySelector(".pageContainer")

root.style.setProperty("--bg-color", pageColor[0])
root.style.setProperty("--accent-color", accentColor[0])

container.addEventListener("scroll", () => {
  let bodyWidth = document.body.clientWidth
  let scrollPos = container.scrollLeft
  for (let i = 0; i < pageColor.length; i++) {
    if ( scrollPos >= bodyWidth*i-bodyWidth/2 && scrollPos < bodyWidth*(i+1)-bodyWidth/2 ) {
      root.style.setProperty("--bg-color", pageColor[i])
      root.style.setProperty("--accent-color", accentColor[i])
    }
  }
})