// --- Renders Lucide Icons ---
lucide.createIcons();

// --- Gear List Accordion Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const gearToggles = document.querySelectorAll('.gear-toggle');

    gearToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.toggle-icon');

            if (content.classList.contains('hidden')) {
                const parentColumn = toggle.closest('.flex-1');
                if (parentColumn) {
                    const allContent = parentColumn.querySelectorAll('.gear-content');
                    allContent.forEach(item => {
                        item.classList.add('hidden');
                        item.classList.remove('active');
                    });
                    const allIcons = parentColumn.querySelectorAll('.toggle-icon');
                    allIcons.forEach(i => {
                        i.classList.remove('rotate-180');
                    });
                }
                content.classList.remove('hidden');
                content.classList.add('active');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                content.classList.remove('active');
                icon.classList.remove('rotate-180');
            }
        });
    });
});

// --- Contact Form Pre-selection ---
function selectService(serviceName) {
    const dropdown = document.getElementById('service_type');
    if (dropdown) {
        dropdown.value = serviceName;
    }
}

// --- Contact Form Logic (URL Parameters) ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
        const dropdown = document.getElementById('service_type');
        if (dropdown) {
            dropdown.value = serviceParam;
        }
    }
});

// --- Hero Carousel Logic ---
let currentSlide = 1;
const totalSlides = 3; 
let slideInterval;

function showSlide(slideIndex) {
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById(`slide-${i}`);
        const dot = document.getElementById(`dot-${i}`);
        
        if (slide && dot) {
            if (i === slideIndex) {
                slide.classList.remove('opacity-0');
                slide.classList.add('opacity-100');
                dot.classList.remove('opacity-50');
                dot.classList.add('opacity-100');
            } else {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
                dot.classList.remove('opacity-100');
                dot.classList.add('opacity-50');
            }
        }
    }
    currentSlide = slideIndex;
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next > totalSlides) next = 1;
    showSlide(next);
}

function goToSlide(n) {
    showSlide(n);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000); 
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('slide-1')) {
        slideInterval = setInterval(nextSlide, 5000);
    }
});