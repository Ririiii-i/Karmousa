// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp order function (replace with your number)
function orderWhatsApp(product) {
    const phoneNumber = '+393331234567'; // Replace with your WhatsApp number
    const message = `Ciao! Vorrei ordinare: ${product}. Puoi aiutarmi?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}