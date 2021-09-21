// Slideshow
let i = 0;
let slideShowImages = [];
let time = 8000;
let timer = null;
let example = 0;
const slideShowDisplay = document.querySelector(".parallax#parallax1")
const slideShowButtons = slideShowDisplay.querySelectorAll('.ss-btn')


slideShowImages[0] = '/assets/slideshow/Header.jpg'
slideShowImages[1] = '/assets/slideshow/Header2.jpg'
slideShowImages[2] = '/assets/slideshow/Header3.jpg'

function changeSlideShow(ifInitial) {
    if (!ifInitial) {
        if (i < slideShowImages.length - 1) {
            i++
        } else {
            i = 0;
        }
    }
    slideShowCSS()
    timer = setTimeout(changeSlideShow, time)
}

function clickSlideShow(e) {
    if (this.id === 'left') {
        if (i === 0) {
            i = slideShowImages.length - 1
        } else {
            i--
        }
    } else {
        if (i < slideShowImages.length - 1) {
            i++
        } else {
            i = 0;
        }
    }
    clearTimeout(timer)
    slideShowCSS()
    timer = setTimeout(changeSlideShow, time)
}

slideShowButtons.forEach(btn => {
    btn.addEventListener('click', clickSlideShow)
})

// Helper SlideShow CSS Function
function slideShowCSS() {
    if (window.innerWidth > 450) {
        slideShowDisplay.style.cssText = `
        background: url(${slideShowImages[i]}) center;
        background-size: cover;
        background-attachment: fixed;
        `
    } else {
        slideShowDisplay.style.cssText = `
        background: url(${slideShowImages[i]}) center;
        background-size: cover;
        background-attachment: scroll;
        `
    }
}


// Call Function
window.onload = changeSlideShow(true)