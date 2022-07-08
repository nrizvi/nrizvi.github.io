var talks =
    [
        {
            "title": "On Neurodiversity",
            "url": "https://sites.google.com/view/queer-in-ai/neurips-2021",
            "role": "panelist",
            "venue": "NeurIPS 2021",
        },
        {
            "title": "Experiences of Computing Students with Disabilities",
            "url": "https://dl.acm.org/doi/abs/10.1145/3408877.3432574",
            "role": "panelist",
            "venue": "SigCSE 2021",
        },
        {
            "title": "Navigating the Tech Scene With a Disability",
            "url": "https://www.washington.edu/doit/our-experiences-speakers-grace-hopper-conference-1",
            "role": "panelist",
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
    var includeThis =
        '<p class="text-center"><span class="space semibold"><a href=" ' + url + '" target="_blank">' + title + '</a>,</span> ' + role + ', <i>' + venue + '</i></p>';
    inf3.innerHTML = includeThis;
    document.querySelector('#talks').appendChild(inf3);
}