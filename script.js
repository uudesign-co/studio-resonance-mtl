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

// --- Contact Form Logic (URL Parameters) ---
// This runs immediately when the contact page loads
document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameters (e.g., ?service=Studio+Recording)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    // If a service parameter exists...
    if (serviceParam) {
        // Find the dropdown menu
        const dropdown = document.getElementById('service_type');
        if (dropdown) {
            // Set the dropdown value to match the parameter
            dropdown.value = serviceParam;
        }
    }
});