var talks =
    [
    {
            "title": "On Responsible AI (In Urdu)",
            "url": "",
            "role": "invited speaker",
            "venue": "Hum TV Morning Show 2023",
        },
    {
            "title": "On Health AI (In Urdu)",
            "url": "https://drive.google.com/file/d/1usvZO0lrSusHIaPmvrT9LO1f0bWJKAOc/view?usp=share_link",
            "role": "invited speaker",
            "venue": "Geo News Morning Show 2023",
        },
        {
            "title": "On Disability Disclosure",
            "url": "https://tapiaconference.cmd-it.org/attend/presentation/?id=psub164&sess=sess143",
            "role": "invited panelist",
            "venue": "Tapia 2022",
        },
        {
            "title": "On Neurodiversity",
            "url": "https://sites.google.com/view/queer-in-ai/neurips-2021",
            "role": "invited panelist",
            "venue": "NeurIPS 2021",
        },
        {
            "title": "Experiences of Computing Students with Disabilities",
            "url": "https://dl.acm.org/doi/abs/10.1145/3408877.3432574",
            "role": "invited panelist",
            "venue": "SigCSE 2021",
        },
        {
            "title": "Navigating the Tech Scene With a Disability",
            "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference-1",
            "role": "invited panelist",
            "venue": "GHC 2019",
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
