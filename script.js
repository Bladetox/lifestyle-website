// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Booking Form Handling
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        alert(`Thank you, ${formData.name}! Your booking request for ${formData.service} on ${formData.date} has been received. We'll contact you at ${formData.email} shortly.`);
        
        // Reset form
        bookingForm.reset();
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', formData);
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.blog-card, .guide-card, .review-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Form input validation feedback
const formInputs = document.querySelectorAll('.booking-form input, .booking-form select, .booking-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '#dfe6e9';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#3498db';
    });
});

// Set minimum date for booking to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Add hover effect to blog categories
document.querySelectorAll('.blog-category').forEach(category => {
    category.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryName = this.textContent;
        alert(`Showing all posts in category: ${categoryName}`);
    });
});

// Console welcome message
console.log('%c🎨 LifeStyle Website', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to the LifeStyle website! Explore our blog, guides, reviews, and book your experience.', 'color: #2c3e50; font-size: 14px;');
