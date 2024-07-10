// Change navigation menu style on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-nav', window.scrollY > 0);
});

// Change font color on hover for menu items
var menuItems = document.querySelectorAll('#navbar ul li a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#ff6600'; // Change font color on hover
    });

    item.addEventListener('mouseleave', function() {
        this.style.color = '#f42020'; // Revert font color when not hovered
    });
});
