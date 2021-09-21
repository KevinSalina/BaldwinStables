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
            navItems.forEach(item => {
                item.classList.remove('active')
                item.style.animation = '';
            })
        }
    })
}

// Home Page Nav
const homeNavSlide = () => {
    const burger = document.querySelector('.hamburger')

    burger.addEventListener('click', () => {
        slideShowDisplay.classList.toggle('active')
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            slideShowDisplay.classList.remove('active')
        }
    })
}


// Call Functions
homeNavSlide()
navSlide()