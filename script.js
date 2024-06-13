document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');
    const loadingScreen = document.getElementById('loading-screen');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(sectionId);
            setTimeout(() => {
                activeSection.style.display = 'block';
                setTimeout(() => {
                    activeSection.classList.add('active');
                }, 10);
            }, 50);
        });
    });

    if (buttons.length > 0) {
        buttons[0].click();
    }

    window.addEventListener('load', () => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });
});
