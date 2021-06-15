// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-item-group-mobile')
    const navItems = nav.querySelectorAll('.nav-item')
    const htmlTag = document.querySelector('html')
    const bodyTag = document.querySelector('body')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        htmlTag.classList.toggle('active')
        bodyTag.classList.toggle('active')
        slideShowDisplay.classList.toggle('active')
        navItems.forEach((item, index) => {
            item.classList.toggle('active')
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navItemFade .5s ease forwards ${index / 7 + .5}s`
            }
        })
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            nav.classList.remove('active')
            htmlTag.classList.remove('active')
            bodyTag.classList.remove('active')
            slideShowDisplay.classList.remove('active')
            navItems.forEach(item => {
                item.classList.remove('active')
                item.style.animation = '';
            })
        }
    })
}

// Slideshow
let i = 0;
let slideShowImages = [];
let time = 8000;
let timer = null;
let example = 0;
const slideShowDisplay = document.querySelector(".parallax#parallax1")
const slideShowButtons = slideShowDisplay.querySelectorAll('.ss-btn')


slideShowImages[0] = 'assets/slideshow/Header.jpg'
slideShowImages[1] = 'assets/slideshow/Header2.jpg'
slideShowImages[2] = 'assets/slideshow/Header3.jpg'

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
        console.log('greater than 450')
        slideShowDisplay.style.cssText = `
        background: url(${slideShowImages[i]}) center;
        background-size: cover;
        background-attachment: fixed;
        `
    } else {
        console.log('less than 450')
        slideShowDisplay.style.cssText = `
        background: url(${slideShowImages[i]}) center;
        background-size: cover;
        background-attachment: scroll;
        `
    }
}


// Call Functions
navSlide()
window.onload = changeSlideShow(true)

