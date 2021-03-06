/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range, delay = 0) {
  setTimeout(() => {
    fadeOut(div)
  },Math.random() * range + delay)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {
    fadeIn(div)
  },Math.random() * range)
}

function fadeAllOut(el, group) {

  group.forEach(div => {
    if (el !== div) {
    delayedFadeOut(div, SHORTRANGE)
    }
  })
    delayedFadeOut(el, LONGRANGE, MINDELAY)

}

function fadeAllIn(group) {
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}
