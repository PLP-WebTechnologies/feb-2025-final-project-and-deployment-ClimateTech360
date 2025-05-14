// Smooth scroll for nav links (Home, Products, About, Contact)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionName = this.textContent.trim().toLowerCase();
        const targetId = sectionName === "home" ? "top" : sectionName;
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑ Top";
Object.assign(scrollBtn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    display: 'none',
    cursor: 'pointer',
    zIndex: 9999
});
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Hero greeting update
const heroHeading = document.querySelector('.hero h2');
if (heroHeading) {
    const hour = new Date().getHours();
    let greeting = "Pure Grains. Wholesome Goodness.";
    if (hour < 12) {
        greeting = "Good Morning from Crunch & Munch!";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Ready for fresh grains?";
    } else {
        greeting = "Good Evening! Wind down with wholesome food.";
    }
    heroHeading.textContent = greeting;
}

// Product click log
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', () => {
        const name = item.querySelector('h3')?.textContent;
        alert(`You clicked on ${name}`);
        console.log("Product clicked:", name);
    });
});