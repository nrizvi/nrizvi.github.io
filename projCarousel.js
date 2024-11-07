[
    {
        "name": "@scientistinpink",
        "title": "Introducing AUTALIC",
        "type": "video",
        "source": "https://www.tiktok.com/@scientistinpink/video/7430869082611731743",
        "description": "We developed the first dataset that contains anti-autistic ableist speech annotated in-context by trained annotators. You can use it to reduce bias and censorship in automated content moderation platforms, and more!",
        "link": "https://nrizvi.github.io/AUTALIC.html"
    },
    {
        "name": "@scientistinpink",
        "title": "Humanizing Robots...While Dehumanizing Autistic People?",
        "type": "video",
        "source": "https://www.tiktok.com/@scientistinpink/video/7376044928004066606",
        "description": "90% of researchers designing and developing robots for autistic people do not even take autistic people's perspectives into consideration!",
        "link": "https://nrizvi.github.io/hri_paper.html"
    },
    {
        "name": "Google Internship",
        "title": "Making AI Work Better For All Skin Tones",
        "type": "image",
        "source": "images/skin_tone.gif",
        "description": "As a research intern at Google, my project focused on improving the accuracy and efficiency of skin type recognition, to improve applications like DermAssist work better for people of all skin types."
    }
]

function createCarouselItem(project, isActive) {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item${isActive ? ' active' : ''}`;

    const row = document.createElement('div');
    row.className = 'row';

    // Media Column
    const mediaCol = document.createElement('div');
    mediaCol.className = 'col-md-6 d-flex align-items-center justify-content-md-end justify-content-center';

    if (project.type === 'video') {
        mediaCol.innerHTML = `
            <blockquote class="tiktok-embed" cite="${project.source}" data-video-id="${project.source.split('/').pop()}" style="width: 100%;">
                <section>
                    <a target="_blank" title="${project.name}" href="https://www.tiktok.com/${project.name}?refer=embed">${project.name}</a>
                    <a target="_blank" href="${project.source}">♬ original sound - ${project.name}</a>
                </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
        `;
    } else if (project.type === 'image') {
        mediaCol.innerHTML = `<img src="${project.source}" class="d-block w-100" alt="${project.title}">`;
    }

    // Text Column
    const textCol = document.createElement('div');
    textCol.className = 'col-md-6 d-flex align-items-center justify-content-md-start justify-content-center text-md-start text-center';
    textCol.innerHTML = `
        <div>
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            ${project.link ? `<p><a href="${project.link}">Learn more here</a></p>` : ''}
        </div>
    `;

    row.appendChild(mediaCol);
    row.appendChild(textCol);
    carouselItem.appendChild(row);

    return carouselItem;
}

function populateCarousel(projects) {
    const carouselInner = document.querySelector('#projectCarousel .carousel-inner');
    projects.forEach((project, index) => {
        const carouselItem = createCarouselItem(project, index === 0);
        carouselInner.appendChild(carouselItem);
    });
}

// Fetch JSON data and populate the carousel
fetch('projects.json')
    .then(response => response.json())
    .then(data => populateCarousel(data))
    .catch(error => console.error('Error loading project data:', error));
