const navItems = document.querySelectorAll('.nav-item');
const navIndicator = document.querySelector('.nav-indicator');
const panels = document.querySelectorAll('.panel');

function setActive(element, index) {
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const navRect = document.querySelector('.nav-content').getBoundingClientRect();
    const itemRect = element.getBoundingClientRect();
    const left = itemRect.left - navRect.left;
    const width = itemRect.width;

    navIndicator.style.left = `${left}px`;
    navIndicator.style.width = `${width}px`;

    panels.forEach(panel => panel.classList.remove('active'));
    panels[index].classList.add('active');
}

navItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        setActive(item, index);
        window.history.pushState(null, null, item.getAttribute('href'));
    });
});

// Set initial active state (default to 'About')
setActive(navItems[0], 0);

// Handle back/forward button
window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash) {
        const index = Array.from(navItems).findIndex(item => item.getAttribute('href') === hash);
        if (index !== -1) {
            setActive(navItems[index], index);
        }
    } else {
        setActive(navItems[0], 0);
    }
});