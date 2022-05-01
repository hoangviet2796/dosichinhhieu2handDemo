const topBtn = document.querySelector('.js-top-btn')

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

//   } else {

//   }
// }

// nav bar



window.onscroll = function () { scrollheader() };

function scrollheader() {
    if (document.body.scrollTop > 46 || document.documentElement.scrollTop > 46) {
        topBtn.style.opacity = 1;
    } else {
        topBtn.style.opacity = 0;
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
