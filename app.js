// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav-item-group-mobile')
    const navItem = nav.querySelectorAll('.nav-item')
    const htmlTag = document.querySelector('html')
    const bodyTag = document.querySelector('body')

    burger.addEventListener('click', () => {
        nav.classList.toggle('active')
        htmlTag.classList.toggle('active')
        bodyTag.classList.toggle('active')
        setTimeout(function () {
            navItem.forEach(item => {
                item.classList.toggle('active')
            })
        }, 600)
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            nav.classList.remove('active')
            htmlTag.classList.remove('active')
            bodyTag.classList.remove('active')
            navItem.forEach(item => {
                item.classList.remove('active')
            })
        }
    })
}

navSlide()