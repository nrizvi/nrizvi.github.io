var talks =
    [
        {
            "title": "On Autism Inclusion in Applied AI Agents",
            "url": "https://www.linkedin.com/posts/eucap_aira-aiandautism-autisticadvocacy-activity-7312906912549814272-eGqh/", // URL not in CV text
            "role": "Invited Speaker",
            "venue": "European Artificial Intelligence & Society Fund (AIRA), Berlin",
            "date": "2025"
        },
        // ----- 2024 -----
        {
            "title": "on Neuro-Inclusive AI",
            "url": "https://career.ucsd.edu/events/future-of-work-conference/day-1.html", // URL not in CV text
            "role": "Invited Speaker",
            "venue": "UCSD Future of Work Conference, La Jolla, CA",
            "date": "2024"
        },
        {
            "title": "On AI Aligment with Neurodiversity",
            "url": "", // URL not in CV text
            "role": "Invited Speaker",
            "venue": "UC Berkeley, Institute of Design, Berkeley, CA",
            "date": "2024"
        },
        // ----- 2023 -----
        // {
        //     "title": "On Responsible AI (In Urdu)",
        //     "url": "",
        //     "role": "invited speaker",
        //     "venue": "Hum TV Morning Show", // Matches script, CV lists Hum TV News
        //     "date": "2023"
        // },
        // {
        //     "title": "On Health AI (In Urdu)",
        //     "url": "https://drive.google.com/file/d/1usvZO0lrSusHIaPmvrT9LO1f0bWJKAOc/view?usp=share_link",
        //     "role": "invited speaker",
        //     "venue": "Geo News Morning Show", // Matches script, CV lists Geo News
        //     "date": "2023"
        // },
        {
            "title": "On Autism Inclusion in Robotics Research",
            "url": "", // URL not in CV text
            "role": "Guest Lecture",
            "venue": "UCSD Interactive Computing Seminar, La Jolla, CA",
            "date": "2023"
        },
        // ----- 2022 -----
        {
            "title": "On Disability Disclosure",
            "url": "https://tapiaconference.cmd-it.org/attend/presentation/?id=psub164&sess=sess143",
            "role": "invited panelist",
            "venue": "Tapia 2022, Washington, DC",
            "date": "2022"
        },
        {
            "title": "Introduction to Creative Computing",
            "url": "", // URL not in CV text
            "role": "Instructor",
            "venue": "Sweetwater High School, La Jolla, CA",
            "date": "2022"
        },
        // ----- 2021 -----
        {
            "title": "On Neurodiversity",
            "url": "https://sites.google.com/view/queer-in-ai/neurips-2021",
            "role": "invited panelist",
            "venue": "NeurIPS 2021, virtual",
            "date": "2021"
        },
        {
            "title": "Experiences of Computing Students with Disabilities",
            "url": "https://dl.acm.org/doi/abs/10.1145/3408877.3432574",
            "role": "invited panelist",
            "venue": "SigCSE 2021, virtual",
            "date": "2021"
        },
        // ----- 2020 -----
        {
            "title": "Biweekly Technical Workshop",
            "url": "", // URL not in CV text
            "role": "Organizer and Instructor",
            "venue": "University of Toledo, ACM-W, Toledo, OH",
            "date": "2020" // Using latest year from 2018-2020 range
        },
        {
            "title": "Introduction to Python",
            "url": "", // URL not in CV text
            "role": "Instructor",
            "venue": "Toledo Early College (Girls Who Code), Toledo, OH",
            "date": "2020" // Using latest year from 2018-2020 range
        },
        // ----- 2019 -----
        {
            "title": "Navigating the Tech Scene With a Disability",
            "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference-1",
            "role": "invited panelist",
            "venue": "GHC 2019, Orlando, FL",
            "date": "2019"
        },
        {
            "title": "Introduction to Web Development",
            "url": "", // URL not in CV text
            "role": "Instructor",
            "venue": "Eberly Women's Center, Toledo, OH",
            "date": "2019"
        },
        // ----- 2018 -----
        {
            "title": "Introduction to JavaScript",
            "url": "", // URL not in CV text
            "role": "Instructor",
            "venue": "Toledo Early College (Girls Who Code), Toledo, OH",
            "date": "2018" // Using latest year from 2017-2018 range
        }
    ];
for (var value in talks) {
    var title = talks[value].title;
    var url = talks[value].url;
    var venue = talks[value].venue;
    var role = talks[value].role;

    var inf3 = document.createElement('span');
    inf3.className = 'talks align-items-center space';

    // Check if the URL is not empty
    var includeThis;
    if (url) {
        includeThis = '<p class="text-center"><span class="space semibold"><a href="' + url + '" target="_blank">' + title + '</a>,</span> ' + role + ', <i>' + venue + '</i></p>';
    } else {
        // If the URL is empty, do not create a hyperlink for the title
        includeThis = '<p class="text-center"><span class="space semibold">' + title + ',</span> ' + role + ', <i>' + venue + '</i></p>';
    }

    inf3.innerHTML = includeThis;
    document.querySelector('#talks').appendChild(inf3);
}
