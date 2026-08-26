var talks =
    [
        // ----- 2026 -----
        {
            "title": "on Neuro-Inclusive AI in the Workplace",
            "url": "",
            "role": "Invited Speaker",
            "venue": "AIRA, European Artificial Intelligence &amp; Society Fund",
            "date": "2026"
        },
        // ----- 2025 -----
        {
            "title": "on Ableism by Design in AI Agents",
            "url": "",
            "role": "Invited Talk",
            "venue": "Adobe",
            "date": "2025"
        },
        {
            "title": "on Ethical AI Agents &amp; Neuro-Inclusive AI",
            "url": "",
            "role": "Guest Lecture",
            "venue": "Pratt Institute, School of Information",
            "date": "2025"
        },
        {
            "title": "on Neuro-Inclusive AI",
            "url": "https://www.linkedin.com/company/eucap/",
            "role": "Invited Speaker",
            "venue": "AIRA, European AI &amp; Society Fund (27 organizations across 18 European nations)",
            "date": "2025"
        },
        // ----- 2024 -----
        {
            "title": "on Neuro-Inclusive AI",
            "url": "",
            "role": "Invited Speaker",
            "venue": "UC Berkeley, Institute of Design",
            "date": "2024"
        },
        {
            "title": "on Responsible AI and Disabilities",
            "url": "https://career.ucsd.edu/events/future-of-work-conference/day-1.html",
            "role": "Invited Speaker",
            "venue": "UC San Diego, Future of Work Conference (~90 attendees)",
            "date": "2024"
        },
        // ----- 2023 -----
        {
            "title": "on Autism Inclusion in HRI Research",
            "url": "",
            "role": "Guest Lecture",
            "venue": "UC San Diego, Interactive Computing Seminar",
            "date": "2023"
        },
        // ----- 2022 -----
        {
            "title": "on Disability Disclosure",
            "url": "https://tapiaconference.cmd-it.org/attend/presentation/?id=psub164&sess=sess143",
            "role": "Invited Panelist",
            "venue": "Tapia 2022 (2,000 attendees)",
            "date": "2022"
        },
        // ----- 2021 -----
        {
            "title": "on AI and Neurodiversity",
            "url": "https://sites.google.com/view/queer-in-ai/neurips-2021",
            "role": "Invited Panelist",
            "venue": "NeurIPS 2021 (15,000+ attendees)",
            "date": "2021"
        },
        {
            "title": "on the Experiences of Computing Students with Disabilities",
            "url": "https://dl.acm.org/doi/abs/10.1145/3408877.3432574",
            "role": "Invited Panelist",
            "venue": "SigCSE 2021 (2,000 attendees)",
            "date": "2021"
        },
        // ----- 2019 -----
        {
            "title": "on Navigating Disability in Tech",
            "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference-1",
            "role": "Invited Panelist",
            "venue": "Grace Hopper Celebration 2019 (25,000 attendees)",
            "date": "2019"
        }
    ];
for (var value in talks) {
    var title = talks[value].title;
    var url = talks[value].url;
    var venue = talks[value].venue;
    var role = talks[value].role;

    var inf3 = document.createElement('span');
    inf3.className = 'talks align-items-center space';

    var includeThis;
    if (url) {
        includeThis = '<p class="text-center"><span class="space semibold"><a href="' + url + '" target="_blank">' + title + '</a>,</span> ' + role + ', <i>' + venue + '</i></p>';
    } else {
        includeThis = '<p class="text-center"><span class="space semibold">' + title + ',</span> ' + role + ', <i>' + venue + '</i></p>';
    }

    inf3.innerHTML = includeThis;
    document.querySelector('#talks').appendChild(inf3);
}
