const header = document.querySelector('.header')

let headerHeight = header.offsetHeight

window.onscroll = function () { scrollheader() };

function scrollheader() {
    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        header.style.top = '0px';
        header.style.position = 'fixed';
    } else {
        header.style.position = 'relative';
        header.style.top = window.scrollY + 'px';
    }
}

window.addEventListener("load", function () {

    var load = document.querySelector('.load');
    var loadContainer = document.querySelector('.loadContainer');
    var body = document.querySelector('body');
    loadContainer.style.display = 'none';
    load.style.display = 'none';
    body.style.overflow = 'unset'
})

const navMobile = document.querySelectorAll('.navItem')
navMobile.forEach(item => {
    item.onclick = function () {
        document.querySelector('.navItem.active').classList.remove('active')
        this.classList.add('active')
    }
})