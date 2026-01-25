/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

window.addEventListener("load", function () {
  document.querySelector(".header-content").classList.add("show");
});
window.addEventListener("scroll", function () {
  document.querySelector(".about-img").classList.add("show");
});
window.addEventListener("scroll", function () {
  document.querySelector(".about-caption").classList.add("show");
});
const disabled = document.getElementById("dis");
disabled.addEventListener("click", function(){
    alert("This button is temporarily disabled by Aayush.");
})
