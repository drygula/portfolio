$(window).on("load", function () {
    projectsSliderInit();
    profileAnimationInit();
});

function projectsSliderInit() {
    const $wrapper = $('.js-projects-wrapper');
    if (!$wrapper.length) return;

    fetch('assets/data/projects.json')
        .then(response => response.json())
        .then(projects => {
            renderProjects(projects, $wrapper);
            initSwiper();
        })
        .catch(error => console.error('Error loading projects:', error));
}

function renderProjects(projects, $container) {
    const html = projects.map(project => `
        <div class="swiper-slide">
            <article class="project-card">
                <div class="project-card__img">
                    <img src="${project.img}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-card__content">
                    <div class="project-card__tags">
                        ${project.tags && project.tags.length ? project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('') : ''}
                    </div>
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__desc">${project.desc}</p>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card__btn" aria-label="${project.aria}">
                        <span>${project.link.replace(/^https?:\/\//, '')}</span>
                    </a>
                </div>
            </article>
        </div>
    `).join('');

    $container.html(html);
}

function initSwiper() {
    new Swiper('.js-projects-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        watchOverflow: true,
        breakpoints: {
            0: { slidesPerView: 1.1, spaceBetween: 20 },
            600: { slidesPerView: 2.3, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 }
        }
    });
}

function profileAnimationInit() {
    const $photo = $('.js-profile-photo');
    if (!$photo.length) return;

    $photo.css({ opacity: 0, transform: 'translateY(20px)' });
    setTimeout(() => {
        $photo.css({ 
            opacity: 1, 
            transform: 'translateY(0)',
            transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' 
        });
    }, 300);
}
