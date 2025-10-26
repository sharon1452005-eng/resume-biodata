$(document).ready(function() {
    // Mobile Menu Toggle
    $('.hamburger').click(function() {
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Form submission handling
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Add scroll animation for elements
    $(window).scroll(function() {
        $('.resume-section, .info-item, .timeline-item').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Initialize any tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Add animation classes for skill bars if they exist
    $('.skill-bar').each(function() {
        $(this).find('.skill-bar-fill').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });
});